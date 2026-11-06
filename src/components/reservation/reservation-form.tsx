"use client";

import { useEffect, useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import {
  reservationWhatsAppHref,
  telHref,
  type ReservationSummary,
} from "@/lib/links";
import { formatDate, formatTime, maxInputDate, todayInputValue } from "@/lib/utils";
import { Button, ButtonLink } from "@/components/ui/button";
import { useReservation } from "@/components/reservation/reservation-provider";

const reservationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please share the name for the table.")
    .max(80, "Please keep the name under 80 characters."),
  phone: z
    .string()
    .trim()
    .refine((value) => {
      const digits = value.replace(/\D/g, "");
      return /^(?:0|91)?[6-9]\d{9}$/.test(digits);
    }, "Enter a valid 10-digit Indian mobile number."),
  date: z
    .string()
    .min(1, "Choose a date.")
    .refine(
      (value) => value >= todayInputValue(),
      "Please choose today or a future date.",
    ),
  time: z
    .string()
    .min(1, "Choose a time.")
    .refine((value) => value < "22:00", "Please choose a time before the 10:00 PM closing."),
  guests: z.string().min(1, "Select the number of guests."),
  occasion: z.string().optional(),
  requests: z
    .string()
    .trim()
    .max(280, "Please keep special requests under 280 characters.")
    .optional(),
});

type ReservationFormValues = z.infer<typeof reservationSchema>;

const occasionOptions = [
  "Just because",
  "Coffee date",
  "Birthday",
  "Anniversary",
  "Work session",
  "Friends catch-up",
  "Other",
];

const guestOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9+"];

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-[0.72rem] leading-snug text-[#9a3928]">
      {message}
    </p>
  );
}

export function ReservationForm() {
  const { occasion } = useReservation();
  const [submitted, setSubmitted] = useState<ReservationSummary | null>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const shouldFocusFormRef = useRef(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      name: "",
      phone: "",
      date: "",
      time: "",
      guests: "2",
      occasion: "",
      requests: "",
    },
  });

  useEffect(() => {
    if (occasion) {
      setValue("occasion", occasion, { shouldValidate: true });
    }
  }, [occasion, setValue]);

  useEffect(() => {
    if (submitted) {
      successRef.current?.focus({ preventScroll: true });
      successRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    } else if (shouldFocusFormRef.current) {
      shouldFocusFormRef.current = false;
      document.getElementById("reservation-name")?.focus({ preventScroll: true });
    }
  }, [submitted]);

  const onSubmit = (values: ReservationFormValues) => {
    setSubmitted({
      name: values.name,
      phone: values.phone,
      date: formatDate(values.date),
      time: formatTime(values.time),
      guests: values.guests,
      occasion: values.occasion,
      requests: values.requests,
    });
  };

  const startOver = () => {
    shouldFocusFormRef.current = true;
    setSubmitted(null);
    reset({
      name: "",
      phone: "",
      date: "",
      time: "",
      guests: "2",
      occasion: occasion ?? "",
      requests: "",
    });
  };

  if (submitted) {
    return (
      <div
        ref={successRef}
        role="status"
        aria-live="polite"
        aria-atomic="true"
        tabIndex={-1}
        className="rounded-[1.25rem] border border-espresso/15 bg-ivory p-6 shadow-[0_30px_80px_rgba(42,27,20,0.08)] focus:outline-none sm:p-8 lg:p-10"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-caramel/40 bg-caramel/10 px-3 py-1.5 text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-caramel-deep">
          <ShieldCheck className="size-3.5" strokeWidth={1.7} />
          Request prepared · not confirmed yet
        </span>

        <h3 className="display mt-6 text-[clamp(2.3rem,4vw,3.5rem)]">
          One last
          <span className="display-italic text-caramel-deep"> step.</span>
        </h3>
        <p className="mt-4 max-w-xl text-[0.9rem] leading-relaxed text-espresso/70">
          Send these details to us on WhatsApp or call the café. We will check
          availability and confirm your table personally. Your booking is{" "}
          <strong className="font-semibold text-espresso">not confirmed</strong>{" "}
          until you hear back from us.
        </p>

        <dl className="mt-7 grid gap-x-6 gap-y-4 border-y border-espresso/15 py-6 sm:grid-cols-2">
          <div>
            <dt className="text-[0.56rem] uppercase tracking-[0.18em] text-espresso/65">
              Name
            </dt>
            <dd className="mt-1 font-serif text-lg text-espresso/85">
              {submitted.name}
            </dd>
          </div>
          <div>
            <dt className="text-[0.56rem] uppercase tracking-[0.18em] text-espresso/65">
              Phone
            </dt>
            <dd className="mt-1 font-serif text-lg text-espresso/85">
              {submitted.phone}
            </dd>
          </div>
          <div>
            <dt className="text-[0.56rem] uppercase tracking-[0.18em] text-espresso/65">
              Date & time
            </dt>
            <dd className="mt-1 font-serif text-lg text-espresso/85">
              {submitted.date} · {submitted.time}
            </dd>
          </div>
          <div>
            <dt className="text-[0.56rem] uppercase tracking-[0.18em] text-espresso/65">
              Guests
            </dt>
            <dd className="mt-1 font-serif text-lg text-espresso/85">
              {submitted.guests} {submitted.guests === "1" ? "guest" : "guests"}
            </dd>
          </div>
          {submitted.occasion ? (
            <div>
              <dt className="text-[0.56rem] uppercase tracking-[0.18em] text-espresso/65">
                Occasion
              </dt>
              <dd className="mt-1 font-serif text-lg text-espresso/85">
                {submitted.occasion}
              </dd>
            </div>
          ) : null}
          {submitted.requests ? (
            <div className="sm:col-span-2">
              <dt className="text-[0.56rem] uppercase tracking-[0.18em] text-espresso/65">
                Special requests
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-espresso/70">
                {submitted.requests}
              </dd>
            </div>
          ) : null}
        </dl>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <ButtonLink
            href={reservationWhatsAppHref(submitted)}
            target="_blank"
            rel="noreferrer"
            variant="dark"
            size="lg"
            className="flex-1"
          >
            <MessageCircle className="size-4" strokeWidth={1.6} />
            Send request on WhatsApp
          </ButtonLink>
          <ButtonLink
            href={telHref()}
            variant="outline"
            size="lg"
            className="flex-1"
          >
            <Phone className="size-4" strokeWidth={1.6} />
            Call {siteConfig.phoneDisplay}
          </ButtonLink>
        </div>

        <div className="mt-5 flex flex-col items-start justify-between gap-3 text-[0.66rem] text-espresso/65 sm:flex-row sm:items-center">
          <span className="inline-flex items-center gap-2">
            <Check className="size-3.5 text-caramel-deep" strokeWidth={1.8} />
            No payment required to send a request.
          </span>
          <Button
            type="button"
            onClick={startOver}
            variant="ghost"
            size="sm"
            className="gap-2 px-0 text-[0.62rem] text-espresso/70 hover:text-espresso"
          >
            <ArrowLeft className="size-3.5" strokeWidth={1.6} />
            Edit request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-[1.25rem] border border-espresso/15 bg-ivory p-6 shadow-[0_30px_80px_rgba(42,27,20,0.08)] sm:p-8 lg:p-10"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow text-[0.56rem] text-caramel-deep">
            Table request
          </p>
          <h3 className="mt-2 font-serif text-[2rem] leading-none text-espresso sm:text-[2.4rem]">
            Tell us about your pause.
          </h3>
        </div>
        <span className="hidden rounded-full border border-espresso/15 px-3 py-1.5 text-[0.54rem] uppercase tracking-[0.16em] text-espresso/65 sm:inline-block">
          No prepayment
        </span>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="reservation-name" className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-espresso/70">
            Your name
          </label>
          <input
            id="reservation-name"
            type="text"
            autoComplete="name"
            placeholder="Full name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "reservation-name-error" : undefined}
            className="field-input mt-2"
            {...register("name")}
          />
          <FieldError id="reservation-name-error" message={errors.name?.message} />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="reservation-phone" className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-espresso/70">
            Phone number
          </label>
          <input
            id="reservation-phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="10-digit mobile number"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "reservation-phone-error" : undefined}
            className="field-input mt-2"
            {...register("phone")}
          />
          <FieldError id="reservation-phone-error" message={errors.phone?.message} />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="reservation-date" className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-espresso/70">
            Date
          </label>
          <input
            id="reservation-date"
            type="date"
            min={todayInputValue()}
            max={maxInputDate(60)}
            aria-invalid={Boolean(errors.date)}
            aria-describedby={errors.date ? "reservation-date-error" : undefined}
            className="field-input mt-2"
            {...register("date")}
          />
          <FieldError id="reservation-date-error" message={errors.date?.message} />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="reservation-time" className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-espresso/70">
            Time
          </label>
          <input
            id="reservation-time"
            type="time"
            max="21:59"
            aria-invalid={Boolean(errors.time)}
            aria-describedby="reservation-time-help reservation-time-error"
            className="field-input mt-2"
            {...register("time")}
          />
          <p id="reservation-time-help" className="mt-1.5 text-[0.66rem] text-espresso/65">
            The café closes at 10:00 PM · opening time to be confirmed by phone.
          </p>
          <FieldError id="reservation-time-error" message={errors.time?.message} />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="reservation-guests" className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-espresso/70">
            Guests
          </label>
          <select
            id="reservation-guests"
            aria-invalid={Boolean(errors.guests)}
            aria-describedby={errors.guests ? "reservation-guests-error" : undefined}
            className="field-input mt-2"
            {...register("guests")}
          >
            {guestOptions.map((guest) => (
              <option key={guest} value={guest}>
                {guest} {guest === "1" ? "guest" : "guests"}
              </option>
            ))}
          </select>
          <FieldError id="reservation-guests-error" message={errors.guests?.message} />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="reservation-occasion" className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-espresso/70">
            Occasion
          </label>
          <select
            id="reservation-occasion"
            className="field-input mt-2"
            {...register("occasion")}
          >
            <option value="">No particular occasion</option>
            {occasionOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="reservation-requests" className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-espresso/70">
            Anything we should know? <span className="normal-case tracking-normal text-espresso/65">(optional)</span>
          </label>
          <textarea
            id="reservation-requests"
            rows={3}
            placeholder="A quiet corner, a birthday candle, a high chair…"
            aria-invalid={Boolean(errors.requests)}
            aria-describedby={errors.requests ? "reservation-requests-error" : undefined}
            className="field-input mt-2 resize-none"
            {...register("requests")}
          />
          <FieldError id="reservation-requests-error" message={errors.requests?.message} />
        </div>
      </div>

      <Button type="submit" variant="dark" size="lg" className="mt-7 w-full" disabled={isSubmitting}>
        Prepare my request
        <ArrowUpRight className="size-4" strokeWidth={1.6} />
      </Button>

      <p className="mt-4 text-center text-[0.64rem] leading-relaxed text-espresso/65">
        This sends a request, not a confirmed booking. We&apos;ll reply on
        WhatsApp or by phone to confirm availability.
      </p>
    </form>
  );
}

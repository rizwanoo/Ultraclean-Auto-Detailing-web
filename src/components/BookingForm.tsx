import React, { useState } from 'react';
import { SERVICES_DATA, BUSINESS_INFO } from '../data/businessData';
import { BookingFormData } from '../types';
import { ArrowRight, CheckCircle2, Phone, Calendar, Car, MapPin, MessageSquare, AlertCircle, ArrowUpRight } from 'lucide-react';

interface BookingFormProps {
  initialServiceId?: string;
  onSuccess?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({ initialServiceId, onSuccess }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    vehicleMakeModel: '',
    serviceId: initialServiceId || SERVICES_DATA[0].id,
    serviceMode: 'workshop',
    preferredDate: '',
    notes: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedBooking, setSubmittedBooking] = useState<{
    reference: string;
    data: BookingFormData;
  } | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Full name must be at least 3 characters.';
    }

    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    if (!cleanPhone) {
      newErrors.phone = 'Please provide your contact phone number.';
    } else if (!/^(03\d{9}|\+923\d{9})$/.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid Pakistani mobile number (e.g., 0302 0100070).';
    }

    if (!formData.vehicleMakeModel.trim()) {
      newErrors.vehicleMakeModel = 'Please specify your vehicle make & model (e.g. Honda Civic, Prado).';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred appointment date.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const reference = `UC-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedBooking({
        reference,
        data: { ...formData }
      });
      setIsSubmitting(false);
      if (onSuccess) onSuccess();
    }, 600);
  };

  const selectedService = SERVICES_DATA.find((s) => s.id === formData.serviceId) || SERVICES_DATA[0];

  if (submittedBooking) {
    const whatsappMessage = encodeURIComponent(
      `Hello Ultraclean Auto Detailing!\n\nI have submitted a booking inquiry online:\n• Reference: ${submittedBooking.reference}\n• Name: ${submittedBooking.data.fullName}\n• Phone: ${submittedBooking.data.phone}\n• Vehicle: ${submittedBooking.data.vehicleMakeModel}\n• Service: ${selectedService.title}\n• Mode: ${submittedBooking.data.serviceMode === 'curbside' ? 'Curbside / Doorstep Pickup' : 'Workshop Drop-off at Qadeer Market'}\n• Preferred Date: ${submittedBooking.data.preferredDate}\n• Notes: ${submittedBooking.data.notes || 'None'}\n\nPlease confirm availability!`
    );

    return (
      <div className="py-12 px-6 sm:px-10 bg-[#EAF7FF] hairline-t hairline-b">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00C7C7]/20 text-[#075BFF] rounded-full">
            <CheckCircle2 className="w-10 h-10 text-[#075BFF]" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-[#075BFF] uppercase tracking-widest font-bold">
              Booking Inquiry Logged // Ref: {submittedBooking.reference}
            </span>
            <h3 className="text-3xl font-extrabold uppercase text-[#27313B] tracking-tight">
              Inquiry Dispatched to Workshop
            </h3>
            <p className="text-sm text-[#27313B]/80 leading-relaxed max-w-lg mx-auto">
              Thank you, <span className="text-[#27313B] font-bold">{submittedBooking.data.fullName}</span>. Our lead detailer at Qadeer Market, Gulzar-e-Quaid will review your vehicle requirements and call you at{' '}
              <span className="text-[#075BFF] font-bold">{submittedBooking.data.phone}</span> to confirm your slot.
            </p>
          </div>

          <div className="py-4 border-y border-[#27313B]/10 text-left text-xs space-y-2 text-[#27313B]">
            <div className="flex justify-between">
              <span className="text-[#27313B]/60">Selected Service:</span>
              <span className="text-[#27313B] font-bold">{selectedService.title}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#27313B]/60">Vehicle:</span>
              <span className="text-[#27313B] font-bold">{submittedBooking.data.vehicleMakeModel}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#27313B]/60">Service Logistics:</span>
              <span className="text-[#27313B] font-bold capitalize">
                {submittedBooking.data.serviceMode === 'curbside'
                  ? 'Curbside / Doorstep Pickup (Rawalpindi/Islamabad)'
                  : 'Studio Drop-off at Qadeer Market, Gulzar-e-Quaid'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#27313B]/60">Preferred Date:</span>
              <span className="text-[#27313B] font-bold">{submittedBooking.data.preferredDate}</span>
            </div>
          </div>

          {/* BORDERLESS ACTION BUTTONS IN CONFIRMATION */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-4">
            <a
              href={`https://wa.me/923020100070?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-borderless text-sm text-[#075BFF] hover:text-[#00C7C7] p-0 group"
            >
              <span>Instant Confirmation on WhatsApp</span>
              <ArrowRight className="w-4 h-4 text-[#00C7C7] group-hover:translate-x-1.5 transition-transform" />
            </a>

            <button
              onClick={() => {
                setSubmittedBooking(null);
                setFormData({
                  fullName: '',
                  phone: '',
                  vehicleMakeModel: '',
                  serviceId: SERVICES_DATA[0].id,
                  serviceMode: 'workshop',
                  preferredDate: '',
                  notes: ''
                });
              }}
              className="btn-borderless text-sm text-[#27313B] hover:text-[#075BFF] p-0 group"
            >
              <span>Submit Another Inquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full space-y-8 bg-[#FFFFFF] p-8 sm:p-10 shadow-lg border border-[#075BFF]/10">
      {/* Form Intro Header */}
      <div className="pb-4 hairline-b">
        <span className="text-xs uppercase tracking-widest text-[#075BFF] font-bold">
          Precision Appointment Scheduling
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-[#27313B] tracking-tight mt-1">
          Reserve Detailing Slot
        </h3>
        <p className="text-xs text-[#27313B]/70 mt-1">
          Studio facility in Qadeer Market, Main Gulzar-e-Quaid, Rawalpindi. Curbside pickup available across Twin Cities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-[#27313B] flex items-center gap-2">
            <span>Owner / Client Name *</span>
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => {
              setFormData({ ...formData, fullName: e.target.value });
              if (errors.fullName) setErrors({ ...errors, fullName: undefined });
            }}
            placeholder="e.g. Tariq Mehmood"
            className={`w-full bg-[#FFFDF7] border ${
              errors.fullName ? 'border-red-500' : 'border-[#27313B]/20 focus:border-[#075BFF]'
            } px-4 py-3 text-sm text-[#27313B] placeholder-neutral-400 focus:outline-none transition-colors`}
          />
          {errors.fullName && (
            <p className="text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-[#27313B] flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#075BFF]" />
            <span>Mobile Phone (Calls & WhatsApp) *</span>
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
              if (errors.phone) setErrors({ ...errors, phone: undefined });
            }}
            placeholder="0302 0100070"
            className={`w-full bg-[#FFFDF7] border ${
              errors.phone ? 'border-red-500' : 'border-[#27313B]/20 focus:border-[#075BFF]'
            } px-4 py-3 text-sm text-[#27313B] placeholder-neutral-400 focus:outline-none transition-colors`}
          />
          {errors.phone && (
            <p className="text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>

        {/* Vehicle Make & Model */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-[#27313B] flex items-center gap-2">
            <Car className="w-3.5 h-3.5 text-[#075BFF]" />
            <span>Vehicle Model & Year *</span>
          </label>
          <input
            type="text"
            value={formData.vehicleMakeModel}
            onChange={(e) => {
              setFormData({ ...formData, vehicleMakeModel: e.target.value });
              if (errors.vehicleMakeModel) setErrors({ ...errors, vehicleMakeModel: undefined });
            }}
            placeholder="e.g. Honda Civic 2021 / Prado TX"
            className={`w-full bg-[#FFFDF7] border ${
              errors.vehicleMakeModel ? 'border-red-500' : 'border-[#27313B]/20 focus:border-[#075BFF]'
            } px-4 py-3 text-sm text-[#27313B] placeholder-neutral-400 focus:outline-none transition-colors`}
          />
          {errors.vehicleMakeModel && (
            <p className="text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.vehicleMakeModel}</span>
            </p>
          )}
        </div>

        {/* Preferred Date */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-[#27313B] flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-[#075BFF]" />
            <span>Preferred Date *</span>
          </label>
          <input
            type="date"
            min={new Date().toISOString().split('T')[0]}
            value={formData.preferredDate}
            onChange={(e) => {
              setFormData({ ...formData, preferredDate: e.target.value });
              if (errors.preferredDate) setErrors({ ...errors, preferredDate: undefined });
            }}
            className={`w-full bg-[#FFFDF7] border ${
              errors.preferredDate ? 'border-red-500' : 'border-[#27313B]/20 focus:border-[#075BFF]'
            } px-4 py-3 text-sm text-[#27313B] focus:outline-none transition-colors`}
          />
          {errors.preferredDate && (
            <p className="text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.preferredDate}</span>
            </p>
          )}
        </div>
      </div>

      {/* Service Selection */}
      <div className="space-y-3">
        <label className="text-xs font-semibold uppercase tracking-wider text-[#27313B]">
          Target Detailing Treatment *
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {SERVICES_DATA.map((service) => {
            const isSelected = formData.serviceId === service.id;
            return (
              <button
                type="button"
                key={service.id}
                onClick={() => setFormData({ ...formData, serviceId: service.id })}
                className={`text-left p-3.5 transition-all cursor-pointer border-none outline-none ${
                  isSelected
                    ? 'bg-[#EAF7FF] text-[#075BFF] shadow-sm ring-1 ring-[#075BFF]'
                    : 'bg-[#FFFDF7] hover:bg-[#EAF7FF]/50 text-[#27313B]'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono mb-1">
                  <span className={isSelected ? 'text-[#075BFF] font-bold' : 'text-neutral-500'}>{service.number}</span>
                  {isSelected && <span className="text-[10px] text-[#00C7C7] font-bold">SELECTED</span>}
                </div>
                <div className="text-sm font-bold uppercase tracking-tight line-clamp-1">{service.title}</div>
                <div className="text-[11px] text-[#27313B]/70 mt-1 line-clamp-1">{service.duration}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Service Delivery Mode */}
      <div className="space-y-3">
        <label className="text-xs font-semibold uppercase tracking-wider text-[#27313B] flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-[#075BFF]" />
          <span>Service Logistics & Location Mode</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setFormData({ ...formData, serviceMode: 'workshop' })}
            className={`p-4 text-left transition-all cursor-pointer border-none outline-none ${
              formData.serviceMode === 'workshop'
                ? 'bg-[#EAF7FF] text-[#075BFF] ring-1 ring-[#075BFF]'
                : 'bg-[#FFFDF7] hover:bg-[#EAF7FF]/50 text-[#27313B]'
            }`}
          >
            <div className="text-xs font-bold uppercase tracking-wide flex items-center justify-between">
              <span>Studio Drop-Off (Rawalpindi)</span>
              {formData.serviceMode === 'workshop' && <span className="text-[#075BFF]">● ACTIVE</span>}
            </div>
            <p className="text-xs text-[#27313B]/70 mt-1">
              Bring your car to our specialized center at Qadeer Market, Main Gulzar-e-Quaid, Rawalpindi.
            </p>
          </button>

          <button
            type="button"
            onClick={() => setFormData({ ...formData, serviceMode: 'curbside' })}
            className={`p-4 text-left transition-all cursor-pointer border-none outline-none ${
              formData.serviceMode === 'curbside'
                ? 'bg-[#E5F6EF] text-[#00C7C7] ring-1 ring-[#00C7C7]'
                : 'bg-[#FFFDF7] hover:bg-[#E5F6EF]/50 text-[#27313B]'
            }`}
          >
            <div className="text-xs font-bold uppercase tracking-wide flex items-center justify-between">
              <span className="text-[#27313B]">Curbside Pickup & Doorstep Care</span>
              {formData.serviceMode === 'curbside' && <span className="text-[#00C7C7]">● ACTIVE</span>}
            </div>
            <p className="text-xs text-[#27313B]/70 mt-1">
              Our team picks up your vehicle from your residence in Rawalpindi or Islamabad and returns it completed.
            </p>
          </button>
        </div>
      </div>

      {/* Special Requests & Notes */}
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-[#27313B] flex items-center gap-2">
          <MessageSquare className="w-3.5 h-3.5 text-[#075BFF]" />
          <span>Vehicle Notes / Special Paint Condition (Optional)</span>
        </label>
        <textarea
          rows={3}
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          placeholder="Mention specific swirl marks, leather tears, pet hair, or preferred inspection hours..."
          className="w-full bg-[#FFFDF7] border border-[#27313B]/20 focus:border-[#075BFF] p-3 text-sm text-[#27313B] placeholder-neutral-400 focus:outline-none transition-colors"
        />
      </div>

      {/* Submit CTA - COMPLETELY BORDERLESS */}
      <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-borderless text-base text-[#075BFF] hover:text-[#00C7C7] p-0 group"
        >
          <span>{isSubmitting ? 'Verifying Availability...' : 'Confirm Detailing Reservation'}</span>
          <ArrowRight className="w-5 h-5 text-[#075BFF] group-hover:translate-x-1.5 transition-transform" />
        </button>

        <div className="text-xs text-[#27313B]/70">
          <span>Need immediate advice? Call direct: </span>
          <a
            href={`tel:${BUSINESS_INFO.phoneInternational}`}
            className="text-[#075BFF] font-bold underline transition-colors ml-1"
          >
            {BUSINESS_INFO.phone}
          </a>
        </div>
      </div>
    </form>
  );
};

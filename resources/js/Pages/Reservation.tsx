"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/Components/ui/button";
import { Calendar } from "@/Components/ui/calendar";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/ui/popover";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import SiteLayout from "@/Layouts/SiteLayout";
import PageLayout from "@/Layouts/PageLayout";

export default function ReservationPage() {
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        guests: "",
        time: "",
        specialRequests: "",
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the reservation data to your backend
        console.log({ ...formData, date });
        alert(
            "Reservation request submitted! We'll contact you shortly to confirm."
        );
    };

    const availableTimes = [
        "12:00 PM",
        "12:30 PM",
        "1:00 PM",
        "1:30 PM",
        "2:00 PM",
        "6:00 PM",
        "6:30 PM",
        "7:00 PM",
        "7:30 PM",
        "8:00 PM",
        "8:30 PM",
        "9:00 PM",
    ];

    return (
        <main className="flex min-h-screen flex-col">
            <section className="w-full py-12 md:py-24 bg-[#0A0908]">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-10 lg:grid-cols-2">
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#F2F4F3] font-['Playfair_Display']">
                                    Reservation Information
                                </h2>
                                <div className="w-20 h-1 bg-[#49111C] mt-2 mb-4"></div>
                                <p className="text-[#A9927D] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Please fill out the form to request a
                                    reservation. We'll contact you to confirm
                                    availability.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="p-6 border border-[#5E503F] rounded-lg bg-[#0A0908]/50">
                                    <h3 className="text-xl font-semibold text-[#F2F4F3] mb-4">
                                        Reservation Policies
                                    </h3>
                                    <ul className="space-y-2 text-[#A9927D]">
                                        <li>
                                            • Reservations are recommended,
                                            especially for weekends and holidays
                                        </li>
                                        <li>
                                            • For parties of 8 or more, please
                                            call us directly
                                        </li>
                                        <li>
                                            • We hold reservations for 15
                                            minutes past the scheduled time
                                        </li>
                                        <li>
                                            • A credit card is required for
                                            reservations on special occasions
                                        </li>
                                        <li>
                                            • Cancellations should be made at
                                            least 24 hours in advance
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-6 border border-[#5E503F] rounded-lg bg-[#0A0908]/50">
                                    <h3 className="text-xl font-semibold text-[#F2F4F3] mb-4">
                                        Contact Information
                                    </h3>
                                    <p className="text-[#A9927D] mb-2">
                                        For immediate assistance or special
                                        arrangements:
                                    </p>
                                    <p className="text-[#F2F4F3]">
                                        Phone: +265 1 234 5678
                                    </p>
                                    <p className="text-[#F2F4F3]">
                                        Email: reservations@maxandsherry.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#F2F4F3] font-['Playfair_Display']">
                                    Book Your Table
                                </h2>
                                <div className="w-20 h-1 bg-[#49111C] mt-2 mb-4"></div>
                            </div>
                            <form
                                onSubmit={handleSubmit}
                                className="space-y-6 reservation-form"
                            >
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="name"
                                            className="text-[#F2F4F3]"
                                        >
                                            Full Name
                                        </Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder="Your name"
                                            required
                                            value={formData.name}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="email"
                                            className="text-[#F2F4F3]"
                                        >
                                            Email
                                        </Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Your email"
                                            required
                                            value={formData.email}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="phone"
                                            className="text-[#F2F4F3]"
                                        >
                                            Phone Number
                                        </Label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            placeholder="Your phone number"
                                            required
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="guests"
                                            className="text-[#F2F4F3]"
                                        >
                                            Number of Guests
                                        </Label>
                                        <Select
                                            value={formData.guests}
                                            onValueChange={(value) =>
                                                handleSelectChange(
                                                    "guests",
                                                    value
                                                )
                                            }
                                        >
                                            <SelectTrigger
                                                id="guests"
                                                className="bg-[#0A0908] border-[#5E503F] text-[#F2F4F3]"
                                            >
                                                <SelectValue placeholder="Select number of guests" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-[#0A0908] border-[#5E503F]">
                                                {[1, 2, 3, 4, 5, 6, 7, 8].map(
                                                    (num) => (
                                                        <SelectItem
                                                            key={num}
                                                            value={num.toString()}
                                                            className="text-[#F2F4F3]"
                                                        >
                                                            {num}{" "}
                                                            {num === 1
                                                                ? "Guest"
                                                                : "Guests"}
                                                        </SelectItem>
                                                    )
                                                )}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label className="text-[#F2F4F3]">
                                            Date
                                        </Label>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    className="w-full justify-start text-left font-normal bg-[#0A0908] border-[#5E503F] text-[#F2F4F3]"
                                                >
                                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                                    {date ? (
                                                        format(date, "PPP")
                                                    ) : (
                                                        <span>
                                                            Select a date
                                                        </span>
                                                    )}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0 bg-[#0A0908] border-[#5E503F]">
                                                <Calendar
                                                    mode="single"
                                                    selected={date}
                                                    onSelect={setDate}
                                                    initialFocus
                                                    className="bg-[#0A0908] text-[#F2F4F3]"
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </div>
                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="time"
                                            className="text-[#F2F4F3]"
                                        >
                                            Time
                                        </Label>
                                        <Select
                                            value={formData.time}
                                            onValueChange={(value) =>
                                                handleSelectChange(
                                                    "time",
                                                    value
                                                )
                                            }
                                        >
                                            <SelectTrigger
                                                id="time"
                                                className="bg-[#0A0908] border-[#5E503F] text-[#F2F4F3]"
                                            >
                                                <SelectValue placeholder="Select a time" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-[#0A0908] border-[#5E503F]">
                                                {availableTimes.map((time) => (
                                                    <SelectItem
                                                        key={time}
                                                        value={time}
                                                        className="text-[#F2F4F3]"
                                                    >
                                                        {time}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="specialRequests"
                                        className="text-[#F2F4F3]"
                                    >
                                        Special Requests
                                    </Label>
                                    <Input
                                        id="specialRequests"
                                        name="specialRequests"
                                        placeholder="Any special requests or dietary requirements"
                                        value={formData.specialRequests}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full bg-[#49111C] hover:bg-[#5E503F] text-[#F2F4F3]"
                                >
                                    Request Reservation
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

ReservationPage.layout = (page: React.ReactElement) => (
    <SiteLayout>
        <PageLayout
            heading="Reserve a Table"
            subheading="secure your dining experience with us"
            image="/images/tables/table-2.webp "
            children={page}
        />
    </SiteLayout>
);

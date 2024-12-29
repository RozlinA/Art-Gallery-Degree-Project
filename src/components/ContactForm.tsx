import { useRef } from "react";
import emailjs from "@emailjs/browser";

interface IContactFormProps {
  showCustomField: boolean;
}

export const ContactForm = ({ showCustomField }: IContactFormProps) => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      console.error("Form is not properly referenced.");
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Meddelandet skickades! Vi återkommer så snart som möjligt.");
          (e.target as HTMLFormElement).reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="border-black flex flex-col gap-4 pb-5"
      >
        <div className="flex justify-between">
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="*Förnamn"
            required
            className="border border-black placeholder-[#3c3c3c] p-2 w-[49.5%] rounded-sm"
          />

          <input
            type="text"
            name="lastName"
            placeholder="*Efternamn"
            required
            className="border border-black placeholder-[#3c3c3c] p-2 w-[49.5%] rounded-sm"
          />
        </div>

        <input
          type="email"
          name="email"
          id="email"
          placeholder="*E-post"
          required
          className="border border-black placeholder-[#3c3c3c] p-2 rounded-sm"
        />

        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Telefonnummer"
          className="border border-black placeholder-[#3c3c3c] p-2 rounded-sm"
        />

        {showCustomField && (
          <input
            type="text"
            name="artwork"
            id="artwork"
            placeholder="Namn på konstverk"
            className="border border-black placeholder-[#3c3c3c] p-2 rounded-sm"
          />
        )}

        {!showCustomField && (
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="*Ämne"
            required
            className="border border-black placeholder-[#3c3c3c] p-2 rounded-sm"
          />
        )}

        <textarea
          name="message"
          id="message"
          placeholder="*Meddelande"
          required
          className="border border-black placeholder-[#3c3c3c] p-2 h-48 rounded-sm"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-black text-white p-2 font-bold font-heading hover:bg-[#3c3c3c] rounded-sm"
        >
          SKICKA
        </button>
      </form>
    </>
  );
};

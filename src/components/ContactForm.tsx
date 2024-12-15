export const ContactForm = () => {
  return (
    <>
      <form
        action=""
        className="border-black flex flex-col gap-4 p-4 md:p-0 w-[33%]"
      >
        <div className="flex justify-between">
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="*Förnamn"
            required
            className="border border-black placeholder-black p-1.5 w-[165px] md:w-[49.5%] rounded-sm"
          />

          <input
            type="text"
            name="lastName"
            placeholder="*Efternamn"
            required
            className="border border-black placeholder-black p-1.5 w-[165px] md:w-[49.5%] rounded-sm"
          />
        </div>

        <input
          type="email"
          name="email"
          id="email"
          placeholder="*E-post"
          required
          className="border border-black placeholder-black p-1.5 rounded-sm"
        />

        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Telefonnummer"
          className="border border-black placeholder-black p-1.5 rounded-sm"
        />

        <input
          type="text"
          name="artwork"
          id="artwork"
          placeholder="Namn på konstverk"
          className="border border-black placeholder-black p-1.5 rounded-sm"
        />

        <textarea
          name="message"
          id="message"
          placeholder="*Meddelande"
          required
          className="border border-black placeholder-black p-1.5 h-48 rounded-sm"
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

export const OrderText = () => {
  return (
    <>
      <div className="md:w-[43%] h-auto flex flex-col order-last md:order-first gap-7">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl">Så här beställer du</h3>

          <div>
            <h4 className="text-base font-semibold font-body">
              Beställ ett konstverk från galleriet:
            </h4>

            <p>
              Hitta det verk som fångar ditt intresse i galleriet. Notera
              konstverkets namn och kontakta oss via formuläret eller e-post för
              att lägga din beställning.
            </p>
          </div>

          <div>
            <h4 className="text-base font-semibold font-body">
              Beställ ett personligt konstverk:
            </h4>

            <p>
              Vill du ha något skräddarsytt? Konstnären skapar gärna ett unikt
              verk för dig, så länge det passar in i hennes stil och
              konstnärliga uttryck. Använd formuläret eller skicka ett e-post
              för att beskriva dina idéer - exempelvis önskad storlek, färgtoner
              eller tema - så kan ni tillsammans skapa något som känns både
              personligt och autentiskt.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-xl">Vad händer efter din beställning?</h3>

          <div>
            <p>
              <b className="font-semibold">Bekräftelse:</b> Efter att du lagt
              din beställning får du en bekräftelse via e-post med all
              information.
            </p>
          </div>

          <div>
            <p>
              <b className="font-semibold">För personliga beställningar:</b>{" "}
              Konstnären kontaktar dig för att diskutera detaljer innan arbetet
              börjar.
            </p>
          </div>

          <div>
            <p>
              <b className="font-semibold">Leverans:</b> Vi packar och skickar
              din tavla säkert direkt till din dörr.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-xl">Frågor eller funderingar?</h3>

          <p>
            Vi finns här för att hjälpa dig! Tveka inte att kontakta oss via
            [e-post] eller [telefon] om du behöver hjälp eller vill veta mer.
          </p>
        </div>
      </div>
    </>
  );
};

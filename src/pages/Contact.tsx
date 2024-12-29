import { IonIcon } from "@ionic/react";
import {
  callOutline,
  mailOutline,
  logoInstagram,
  logoFacebook,
  logoPinterest,
} from "ionicons/icons";
import { ContactForm } from "../components/ContactForm";

export const Contact = () => {
  return (
    <>
      <div className="w-screen h-screen max-h-[100px] md:max-h-[100px] bg-black flex flex-col justify-center items-center md:mb-2">
        <h1 className="text-3xl md:text-5xl text-white font-extrabold tracking-widest">
          KONTAKT
        </h1>
      </div>

      <section className="w-screen flex justify-center items-center py-10 md:py-14">
        <div className="flex justify-center w-full h-auto">
          <div className="flex flex-col md:flex-row w-[90%] md:w-[70%] gap-8 justify-center items-center md:items-start">
            <p className="md:hidden">
              Har du frågor eller vill komma i kontakt med konstnären? Fyll i
              formuläret eller använd kontaktuppgifterna längre ner på sidan för
              att komma i direkt kontakt.
            </p>
            <div className="w-full md:w-[40%] flex flex-col gap-3 order-last md:order-first">
              <h2 className="hidden md:block text-3xl font-bold pb-2">
                Kontakt
              </h2>

              <p className="hidden md:block pb-8">
                Har du frågor, funderingar eller vill komma i kontakt med
                konstnären? Fyll i formuläret bedvid eller använd
                kontaktuppgifterna nedan för att komma i direkt kontakt.
              </p>
              <div className="flex flex-col w-full gap-8">
                <div className="flex gap-3 text">
                  <IonIcon
                    icon={callOutline}
                    className="text-[28px] "
                  ></IonIcon>
                  <p>073-456 78 90</p>
                </div>
                <div className="flex gap-3">
                  <IonIcon icon={mailOutline} className="text-[28px]"></IonIcon>
                  <p>konst@gmail.com</p>
                </div>
                <div className="flex gap-6">
                  <a href="https://instagram.com" target="_blank">
                    <IonIcon
                      icon={logoInstagram}
                      title="Instagram"
                      className="text-[28px] cursor-pointer hover:text-gray-400"
                    ></IonIcon>
                  </a>
                  <a href="https://facebook.com" target="_blank">
                    <IonIcon
                      icon={logoFacebook}
                      title="Facebook"
                      className="text-[28px] cursor-pointer hover:text-gray-400"
                    ></IonIcon>
                  </a>
                  <a href="https://pinterest.com" target="_blank">
                    <IonIcon
                      icon={logoPinterest}
                      title="Pinterest"
                      className="text-[28px] cursor-pointer hover:text-gray-400"
                    ></IonIcon>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[60%] flex flex-col gap-6 md:border-l md:border-gray-300 md:pl-20">
              <ContactForm></ContactForm>
              <hr className="md:hidden" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

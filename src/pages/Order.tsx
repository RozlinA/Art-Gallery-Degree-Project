import { ContactForm } from "../components/ContactForm";
import { OrderText } from "../components/OrderText";
import backgroundImage from "../assets/Midyat2.jpg";
import { IonIcon } from "@ionic/react";
import { informationCircleOutline } from "ionicons/icons";

export const Order = () => {
  return (
    <>
      <div
        className="w-screen h-screen max-h-[100px] md:max-h-[160px] bg-cover bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h1 className="text-3xl md:text-5xl text-white font-extrabold tracking-widest">
          BESTÄLL KONST
        </h1>
      </div>

      <section className="w-screen h-auto flex justify-center items-center py-10 md:py-14">
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row w-[90%] md:w-4/5 gap-8 justify-between">
            <OrderText></OrderText>

            <div className="w-full md:w-[50%] flex flex-col gap-6 md:border-l md:border-gray-300 md:pl-20">
              <h3>
                Fyll i formuläret nedan eller kontakta oss direkt via e-post på
                konst@gmail.com
              </h3>
              <div className="md:hidden flex">
                <IonIcon
                  icon={informationCircleOutline}
                  size="small"
                  className="pr-1"
                ></IonIcon>
                <p className="font-medium">
                  Information om hur du beställer hittar du längre ner på sidan
                </p>
              </div>

              <ContactForm></ContactForm>
              <hr className="md:hidden" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

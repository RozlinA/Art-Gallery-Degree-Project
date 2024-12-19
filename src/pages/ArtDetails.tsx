import { useFetchArtworks } from "../hooks/useFetchArtworks";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { chevronBackOutline, chevronForwardOutline } from "ionicons/icons";

export const ArtDetails = () => {
  const { artDetails, fetchError } = useFetchArtworks();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const allImages = [
    { image_url: artDetails?.main_image, alt_text: artDetails?.title },

    ...(artDetails?.artwork_images || []),
  ];

  const handleNext = () => {
    setCurrentImageIndex((currentIndex) =>
      currentIndex < allImages.length - 1 ? currentIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((currentIndex) =>
      currentIndex > 0 ? currentIndex - 1 : allImages.length - 1
    );
  };

  const handleChangeImageIndex = (selectedIndex: number) => {
    setCurrentImageIndex(selectedIndex);
  };

  return (
    <>
      {fetchError && <p>{fetchError}</p>}

      {artDetails && (
        <section className="w-screen h-auto md:h-[680px] flex justify-center items-start md:items-center mb-10 md:mb-0">
          <div className="w-4/5 h-max-[60%] flex flex-col md:flex-row justify-center items-center gap-10">
            {/* Behållare för bilderna i mobil + karusell */}

            <div className="block md:hidden relative w-full max-w-full md:max-w-[90%] bg-gray-100">
              <div className="flex justify-center items-center">
                <IonIcon
                  icon={chevronBackOutline}
                  size="large"
                  className="absolute left-0 cursor-pointer"
                  onClick={handlePrev}
                />

                <img
                  src={allImages[currentImageIndex]?.image_url}
                  alt={allImages[currentImageIndex]?.alt_text}
                  className="object-contain w-full h-[300px] md:h-[55vh]"
                />

                <IonIcon
                  icon={chevronForwardOutline}
                  size="large"
                  className="absolute right-0 cursor-pointer"
                  onClick={handleNext}
                />
              </div>

              <div className="absolute bottom-[-22px] right-0 left-0">
                <div className="flex justify-center items-center gap-2.5">
                  {allImages.map((_, i) => (
                    <div
                      key={i}
                      className={`transition-all w-3 h-3 bg-black rounded-full ${
                        currentImageIndex === i ? "p-1" : "bg-opacity-50"
                      }`}
                      onClick={() => {
                        handleChangeImageIndex(i);
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Behållare för de små bilderna/valbara bilder i desktop */}

            <div className="hidden md:flex flex-col w-[10%] h-full max-h-[400px] gap-2 overflow-y-auto">
              {allImages.map((artworkImage, i) => (
                <div key={i}>
                  <img
                    src={artworkImage.image_url}
                    alt={artworkImage.alt_text}
                    onClick={() => setCurrentImageIndex(i)}
                    className={`cursor-pointer transition-opacity duration-300 ${
                      i === currentImageIndex
                        ? "opacity-100"
                        : "opacity-50 hover:opacity-75"
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* Behållare för huvudbild */}

            <div className="hidden md:block w-[45%] h-full bg-gray-100">
              <div>
                <img
                  src={allImages[currentImageIndex].image_url}
                  alt={allImages[currentImageIndex].alt_text}
                  className="object-contain w-full max-w-full max-h-[55vh]"
                />
              </div>
            </div>

            {/* Behållare för text detaljer */}

            <div className="w-full md:w-[25%] h-full flex flex-col justify-end gap-6 mt-4">
              <div className="w-full">
                <h2 className="uppercase text-2xl font-medium pb-1 md:pb-4">
                  {artDetails?.title}
                </h2>
                <p className="text-gray-500">{artDetails?.size}</p>
                <p className="text-gray-500">{artDetails?.technique}</p>
                <p className="py-4">{artDetails?.price} SEK</p>
              </div>

              <Link to={"/bestall"}>
                <button className="bg-black text-white p-2 w-full hover:bg-[#3c3c3c] rounded-sm">
                  Beställ konstverket
                </button>
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

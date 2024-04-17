"use client";

import {
  GoogleMap,
  InfoWindowF,
  LoadScript,
  Marker,
  MarkerF,
} from "@react-google-maps/api";
import Container from "../components/Container";
import useLocation from "@/app/hooks/useLocation";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ListShop } from "@/app/constants/ListShop";
import { Listcard } from "@/app/constants/Listcard";
import L from "leaflet";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import isEqual from "fast-deep-equal";
import { setId } from "../components/store";

type place =
  | {
      town: string;
      image: string;
      Nature: string;
      shopid: number;
      Address: string;
      Company: string;
      Country: string;
      PostalCode: string;
      latitude: number;
      longitude: number;
      Responsible: string;
      etat: string;
    }
  | undefined;
type CustomSize = {
  width: number;
  height: number;
  equals: (other: CustomSize) => boolean;
};
const Map = () => {
  const navigateToOtherPage = (id: number) => {
    setId(id);
    localStorage.setItem("id", id.toString());
    var jsonString = JSON.stringify(Listcard[id]);

    // Sample JSON data
    var jsonData = {
      workflow: Listcard[id].workflow,
      categories: Listcard[id].categories,
      items: Listcard[id].items,
      place: Listcard[id].place,
    };

    // Convert JSON data to a string
    var jsonString = JSON.stringify(jsonData);

    // Store the JSON string in localStorage
    localStorage.setItem("card", jsonString);

    router.push("/components/Boutiques");
  };
  const ContainerStyle = {
    width: "100%",
    height: "70vh",
  };
  const cordinate = { lat: 44.62072, lng: 4.39088 };
  const { userLocation, setUserlocation } = useLocation();
  console.log("locationx", userLocation);

  const customPinView: any = new L.Icon({
    icon: FaMapMarkerAlt, // Specify the path to your icon image
    iconSize: [50, 50],
    // Set the size of the icon
  });

  const postalCodes: string[] = Object.values(ListShop).map(
    (item: any) => item.PostalCode
  );
  console.log(postalCodes);
  const pixelOffset: CustomSize = {
    width: 0,
    height: 0,
    equals: function (other: CustomSize): boolean {
      return this.width === other.width && this.height === other.height;
    },
  };

  const [selectedPlace, setSelectedPlace] = useState<place>();
  const router = useRouter();

  return (
    <Container>
      {/* <Button small label="click" onClick={()=>{router.push(`/api/${postalCode}`)}}/> */}
      <div className="m-2">
        <LoadScript googleMapsApiKey="AIzaSyCcZCtpIV_HA2TVXT5IhktA_MvxWxnWHkA">
          <GoogleMap
            mapContainerStyle={ContainerStyle}
            center={cordinate}
            zoom={4}
          >
            <MarkerF
              key="myLocation"
              icon={customPinView}
              position={userLocation}
            />

            {Object.values(ListShop).map((place: any) => (
              <MarkerF
                key={`${place.Address}-${place.Company}-${place.latitude}-${place.longitude}`}
                onClick={() => {
                  place === selectedPlace
                    ? setSelectedPlace(undefined)
                    : setSelectedPlace(place);
                }}
                icon={customPinView}
                position={{ lat: place.latitude, lng: place.longitude }}
              />
            ))}
            {selectedPlace && (
              <InfoWindowF
                position={{
                  lat: selectedPlace.latitude,
                  lng: selectedPlace.longitude,
                }}
                zIndex={1}
                options={{
                  pixelOffset: pixelOffset,
                }}
                onCloseClick={() => setSelectedPlace(undefined)}
              >
                <div>
                  <div className="aspect-square overflow-hidden relative w-full rounded-md h-[200px]">
                    <Image
                      fill
                      src={selectedPlace.image}
                      alt=""
                      onClick={() => {
                        let id = "";
                        for (let item of Object.keys(ListShop)) {
                          if (
                            JSON.stringify((ListShop as any)[item]) ===
                            JSON.stringify(selectedPlace)
                          ) {
                            id = item;
                          }
                        }
                        router.push(`/components/Boutiques/${id}`);
                      }}
                    />
                  </div>

                  <h3>{selectedPlace.Company}</h3>
                  <div className=" text-[15px] flex gap-1 ">
                    <div>{selectedPlace.Address},</div>
                    <div>{selectedPlace.PostalCode}</div>
                    <div>{selectedPlace.town}</div>
                  </div>
                </div>
              </InfoWindowF>
            )}
          </GoogleMap>
        </LoadScript>
      </div>
    </Container>
  );
};

export default Map;

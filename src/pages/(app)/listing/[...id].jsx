import React from "react";
import { useParams } from "react-router";
import { useProperty } from "../../../libs/useProperty";
import NotFound from "../../404";
import { propertyNameCreator } from "../../../libs/propertyName";
import { PhotoGallery } from "./_components/gallery/gallery";
import styles from "./listing.module.css";

const ListingPage = () => {
  const params = useParams();
  const id = params["*"];
  const property = useProperty(id);

  if (property == null) {
    return <NotFound />;
  }

  const name = propertyNameCreator(
    property.type,
    property.location.street,
    property.location.town,
    property.price.isRent,
  );

  return (
    <main className={styles.listing}>
      <PhotoGallery images={property.images} />
      <h1 className={styles.name}>{name}</h1>
      <p>
        {property.description &&
          property.description.split("\n").map((t) => (
            <>
              {t}
              <br />
            </>
          ))}
      </p>
    </main>
  );
};

export default ListingPage;

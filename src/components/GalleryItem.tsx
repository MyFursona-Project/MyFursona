import styles from "@/styles/GalleryItem.module.scss"
import Link from "next/link"

interface IGalleryItemProps {
  avatar: string
  name: string
  species: string
  gradientCSS: string
  primaryColor: string
  link: string
}

export default function GalleryItem({
  avatar,
  gradientCSS,
  name,
  species,
  primaryColor = "black",
  link
}: IGalleryItemProps) {
  return (
    <Link href={link} passHref>
      <a>
        <div
          id={styles["galleryItem"]}
          style={{
            background: `${gradientCSS}`
          }}
        >
          <img
            src={avatar}
            style={{
              border: `${primaryColor} solid 3px`,
              background: `${primaryColor}`
            }}
            alt={`${name}'s avatar`}
          />
          <h2>{name}</h2>
          <h3>{species}</h3>
        </div>
      </a>
    </Link>
  )
}

export function LoadingGalleryItem() {
  return (
    <div id={styles["loadingGalleryItem"]}>
      <div id={styles["loadingImage"]} style={{ background: `` }}></div>
      <div id={styles["text"]}></div>
      <div id={styles["textSpecies"]}></div>
    </div>
  )
}

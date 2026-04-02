import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDestinationBySlug } from "@/service/apicalling";

export default async function DestinationsDetailsPage({ params }) {
  const { continentSlug, countrySlug, destinationsSlug } = params;
  const response = await getDestinationBySlug(destinationsSlug);
  const destination = response?.data;

  if (!destination) {
    notFound();
  }

  const title = destination.heading || destination.name;
  const subtitle =
    destination.smallDescription ||
    destination.description ||
    "Explore this destination in detail.";
  const imageUrl =
    destination.image ||
    destination.images?.url ||
    "/destination-img/europe.webp";
  const bodyHtml =
    destination.content ||
    destination.descriptionLong ||
    destination.details ||
    "<p>No additional information is available for this destination.</p>";

  return (
    <div className="container">
      <div style={{ margin: "2rem 0" }}>
        <Link href={`/destinations/${continentSlug}/${countrySlug}`}>
          Back to {countrySlug.replace(/-/g, " ")}
        </Link>
      </div>

      <article>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div style={{ margin: "2rem 0" }}>
          <Image
            src={imageUrl}
            alt={title}
            width={1200}
            height={600}
            style={{ width: "100%", height: "auto", borderRadius: "1rem" }}
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      </article>
    </div>
  );
}

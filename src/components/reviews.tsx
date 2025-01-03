import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "Rhyan57",
    username: "@rhyan57",
    body: 'O que eu estou fazendo aqui! OMG.',
    img: "/pfps/rhyan57.png",
  },
  {
    name: "seekAlegriaFla",
    username: "@emanuelmiguel",
    body: "Eu Peguei a referência 😱😁",
    img: "/pfps/seek.png",
  },
  {
    name: "DreamAlt",
    username: "@dreamingwithyou",
    body: "Sei lá '-' Como instalar",
    img: "/pfps/dreamingwithyou.png",
  },
  {
    name: "Rhyan58",
    username: "@rhyan58",
    body: "LOL essa é minha conta secundária.",
    img: "/pfps/rhyan57.png",
  }
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function ReviewMarquee() {
  return (
    <div className="relative py-10 flex w-screen flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl text-left">
      <Marquee className="[--duration:60s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:60s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

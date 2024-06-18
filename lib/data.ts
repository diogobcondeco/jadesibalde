import { AboutProps, SocialNetworksProps } from "./types";

export const aboutInfo: AboutProps = {
  title: "Sobre A Advogada",
  description: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac suscipit urna, ac maximus arcu.",
    "Maecenas sit amet sapien non nisl tempor malesuada dictum ut risus. Ut dignissim tortor in sapien maximus, eu pulvinar nibh cursus.",
    "Vivamus non commodo erat. Donec ut pretium dui. In sagittis orci vitae nunc tempor, ac maximus urna euismod. Nullam sit amet convallis metus.",
    "Praesent semper elit eget nunc dignissim, eget pulvinar elit ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    "Proin ac mi egestas, vulputate nulla eget, ultrices nunc. Curabitur mattis mauris nunc, at pretium sapien laoreet in. Morbi odio risus, iaculis vitae mattis venenatis, viverra in lorem. Nulla facilisi. Sed ante lacus, iaculis varius erat et, bibendum faucibus eros."
  ],
  imageUrl: "/images/about-image.jpg"
} 

export const socialNetworksInfo: SocialNetworksProps[] = [
  {
    icon: "mdi:youtube",
    linkUrl: "https://www.youtube.com/@direitoporjade"
  },
  {
    icon: "mdi:linkedin",
    linkUrl: "https://www.linkedin.com/in/jade-sibalde-9866b422a"
  }
];

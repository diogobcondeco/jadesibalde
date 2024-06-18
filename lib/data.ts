import { AboutProps, DiferenciaisProps, SocialNetworksProps } from "./types";

export const diferenciaisInfo: DiferenciaisProps[] = [
    {
      logo: "/images/logo1.png",
      title: "Title 1",
      description: "This is a small description for item 1. It should be about twenty words long."
    },
    {
      logo: "/images/logo2.png",
      title: "Title 2",
      description: "This is a small description for item 2. It should be about twenty words long."
    },
    {
      logo: "/images/logo3.png",
      title: "Title 3",
      description: "This is a small description for item 3. It should be about twenty words long."
    },
    {
      logo: "/images/logo4.png",
      title: "Title 4",
      description: "This is a small description for item 4. It should be about twenty words long."
    },
    {
      logo: "/images/logo5.png",
      title: "Title 5",
      description: "This is a small description for item 5. It should be about twenty words long."
    },
];

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

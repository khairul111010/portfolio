import Link from "next/link";

const Socials = () => {
  const socials = [
    {
      id: "linkedin",
      title: "LinkedIn",
      description: "Career updates",
      url: "https://www.linkedin.com/in/imkhairulhasan/",
      image: "/dp.webp", // Replace with your LinkedIn photo manually
      color: "from-blue-600 to-blue-700",
      isExternal: true,
    },
    {
      id: "github",
      title: "GitHub",
      description: "Code repositories",
      url: "https://github.com/khairul111010",
      image: "https://github.com/khairul111010.png",
      color: "from-gray-800 to-gray-900",
      isExternal: true,
    },
    {
      id: "mail",
      title: "Mail",
      description: "Get in touch with me",
      url: "mailto:khairul.hasan.dev@gmail.com",
      image: "/gmail.png", // Any placeholder image or your own avatar
      color: "from-red-500 to-red-600",
      isExternal: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-4">
      {socials.map((social) => (
        <Link
          key={social.id}
          href={social.url}
          target={social.isExternal ? "_blank" : "_self"}
          rel="noopener noreferrer"
        >
          <div className={`rounded-md p-2 ${social.color} shadow-md`}>
            <div className="flex flex-col items-center text-center">
              <img
                src={social.image}
                alt={`${social.title} preview`}
                className="w-20 h-20 rounded-full object-cover border-4 border-white mb-4"
              />
              <h3 className="text-lg font-semibold">{social.title}</h3>
              <p className="text-sm italic text-slate-700">
                {social.description}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;

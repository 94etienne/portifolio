import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Fulgence MANIRAHO",
      title: "Senior Developer",
      img:
        "assets/etienno.png",
      icon: "assets/twitter.png",
      desc:
        "Founder of WorldSoft Ltd",
    },
    {
      id: 2,
      name: "Etienne NTAMBARA",
      title: "Founder of OIMS",
      img:
        "assets/etienno.png",
      icon: "assets/youtube.png",
      desc:
        "Founder of Open Inventory Management System ",
      featured: true,
    },
    {
      id: 3,
      name: "Celestin MBONABUCYA",
      title: "Lecturer at UR",
      img:
        "assets/etienno.png",
      icon: "assets/linkedin.png",
      desc:
        "Founder of USANZU WANGE",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

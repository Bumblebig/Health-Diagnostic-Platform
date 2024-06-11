import { Link } from "react-router-dom";

const Providers = () => {
  const providers = [
    {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ99clJ9uWmomyjNVgO-PjeZrnur-_sswiUg&s",
      url: "",
    },
    {
      icon: "",
      url: "",
    },
    {
      icon: "",
      url: "",
    }
  ];

  return (
    <div className="login-providers">
      <div className="wrapper">
        {
            providers.map((provider, i) => {
                return(
                    <Link key={i} href={provider.url} >
                        <img src={provider.icon} alt="" />
                    </Link>
                )
            })
        }
      </div>
    </div>
  );
};

export default Providers;

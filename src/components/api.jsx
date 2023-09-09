import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

function Api() {
  const api = `https://api.unsplash.com/photos?client_id=ShLVRCCiDM0s57tqzRBL4BH3TG-5HU5rYx9mc97ZZTg`;
  const [search, setSearched] = useState([]);
  const [sss, setSss] = useState("");

  useEffect(() => {
    async function news() {
      const res1 = await fetch(api);
      const data1 = await res1.json();
      console.log(data1);
      setSearched(data1);
    }
    news();
  }, []);

  const hand = async (a) => {
    a.preventDefault();
    const apiqur = `https://api.unsplash.com/search/photos?&query=${sss}&client_id=ShLVRCCiDM0s57tqzRBL4BH3TG-5HU5rYx9mc97ZZTg`;
    const res2 = await fetch(apiqur);
    const data2 = await res2.json();
    console.log(data2);
    setSearched(data2.results);
  };

  const vallue = (e) => {
    setSss(e.target.value);
  };

  const alrett = () => {
    toast("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <>
      <nav className="bg-indigo-500 py-4">
        <div className="mx-20 container ">
          <div className="bg-white px-3 w-64 py-2 rounded-sm flex border border-blue-800  ">
            <input type="text" onChange={vallue} className="outline-none"/>
            <button onClick={hand}>Search</button>
          </div>
        </div>
      </nav>
      <div className="pt-10">
        {search.length > 0 ? (
          search?.map((pack) => {
            const { urls, id } = pack;
            return (
              <>
                <div key={id} className="flex justify-center py-2">
                  <img src={urls.small} alt="" className=" border border-purple-800 rounded-lg"/>
                </div>
              </>
            );
          })
        ) : (
          <div>
            <h1>No Images Were Found !</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default Api;

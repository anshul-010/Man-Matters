import "../Styles/AdminAddNewItem.css";
import DoctorImg from "../Images/Add-New-Item/DoctorImg.png";
import { motion } from "framer-motion";
import { useReducer, useState } from "react";
import axios from "axios";
import { Box, Spinner, useToast } from "@chakra-ui/react";

let initialState = {
  image: [],
  price: "",
  title: "",
  for: "",
  stage: "",
  with: "",
  category: "",
  rating: "",
  newlaunch: false,
};

function reducer(state: any, action: any) {
  // console.log(state);
  switch (action.type) {
    case "image1": {
      let imgData = [...state.image, action.payload];
      return { ...state, image: imgData };
    }
    case "image2": {
      let imgData = [...state.image, action.payload];
      return { ...state, image: imgData };
    }
    case "image3": {
      let imgData = [...state.image, action.payload];
      return { ...state, image: imgData };
    }
    case "image4": {
      let imgData = [...state.image, action.payload];
      return { ...state, image: imgData };
    }
    case "price": {
      return { ...state, price: +action.payload };
    }
    case "title": {
      return { ...state, title: action.payload };
    }
    case "for": {
      return { ...state, for: action.payload };
    }
    case "stage": {
      return { ...state, stage: +action.payload };
    }
    case "with": {
      return { ...state, with: action.payload };
    }
    case "category": {
      return { ...state, category: action.payload };
    }
    case "rating": {
      return { ...state, rating: +action.payload };
    }
    case "newlaunch": {
      return { ...state, newlaunch: action.payload };
    }
    case "reset": {
      return initialState;
    }
    default:
      throw Error(`invalid action type`);
  }
}

export const AdminAddNewItem = () => {
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const swipeAnimationFromBottom = {
    initial: { y: "15%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.7, delay: 0.3 },
  };
  function handleAddNewItem(e: any) {
    e.preventDefault();
    setIsLoading(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    axios
      .post(`${API_URL}/product/add-products`, state)
      .then((res) => {
        setIsLoading(false);
        console.log(res.data);
        toast({
          position: "top",
          duration: 2500,
          render: () => (
            <Box color="white" p={3} bg="#69d729">
              <b>Item Added Successfully 👍</b>
            </Box>
          ),
        });
      });
    // setTimeout(()=>{setIsLoading(false)},2000)
    dispatch({ type: "reset" });
  }

  function handleImageChange(index: number, value: string) {
    dispatch({ type: `image${index}`, payload: value });
  }

  return (
    <>
      {isLoading && (
        <Spinner
          thickness="10px"
          speed=".8s"
          emptyColor="white"
          color="blue.400"
          size="xl"
          zIndex="100"
          pos="relative"
          left="47vw"
          top="35vh"
        />
      )}
      {isLoading && (
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100vw"
          height="100vh"
          bg="rgba(0, 0, 0, 0.5)"
          zIndex="1"
        ></Box>
      )}
      <div id="main-box">
        <div className="img1">
          <img src={DoctorImg} alt="" />
        </div>
        <motion.div {...swipeAnimationFromBottom}>
          <div id="form-box">
            <h2 id="heading">Add New Item</h2>
            <form onSubmit={handleAddNewItem}>
              {[1, 2, 3, 4].map((index) => (
                <div key={index}>
                  <label>
                    {`Image url ${index}`}
                    <br />
                    <input
                      type="text"
                      placeholder={`image url ${index}`}
                      value={state.image[index - 1] || ""}
                      onChange={(e) => handleImageChange(index, e.target.value)}
                      required
                    />
                  </label>
                  <br />
                </div>
              ))}
              <br />

              <label>
                {" Price"}

                <br />
                <input
                  type="text"
                  placeholder="price"
                  value={state.price}
                  onChange={(e) =>
                    dispatch({ type: "price", payload: e.target.value })
                  }
                  required
                />
              </label>
              <br />

              <label>
                {" Title"}

                <br />
                <input
                  type="text"
                  placeholder="title"
                  value={state.title}
                  onChange={(e) =>
                    dispatch({ type: "title", payload: e.target.value })
                  }
                  required
                />
              </label>
              <br />

              <label>
                {"For "}

                <br />
                <select
                  id=""
                  value={state.for}
                  onChange={(e) =>
                    dispatch({ type: "for", payload: e.target.value })
                  }
                  required
                >
                  <option value="">Select</option>
                  <option value="Stage 1 Hair Fall">Stage 1 Hair Fall</option>
                  <option value="Stage 2 Hair Loss">Stage 2 Hair Loss</option>
                  <option value="Stage 3 & 4 Hair Fall">
                    Stage 3 & 4 Hair Fall
                  </option>
                  <option value="Stage 4 Hair Fall">Stage 4 Hair Fall</option>
                  <option value="Beard Growth">Beard Growth</option>
                  <option value="Thicker and stronger beard">
                    Thicker and stronger beard
                  </option>
                  <option value="Dense and thick beard">
                    Dense and thick beard
                  </option>
                  <option value="Nutrition & Post workout">
                    Nutrition & Post workout
                  </option>
                  <option value="Better physical, brain health">
                    Better physical, brain health
                  </option>
                  <option value="Better energy & Metabolism">
                    Better energy & Metabolism
                  </option>
                </select>
              </label>
              <br />

              <label>
                {"Stage "}

                <br />
                <select
                  id=""
                  value={state.stage}
                  onChange={(e) =>
                    dispatch({ type: "stage", payload: e.target.value })
                  }
                  required
                >
                  <option value="">Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </label>
              <br />

              <label>
                {"With "}

                <br />
                <select
                  id=""
                  value={state.with}
                  onChange={(e) =>
                    dispatch({ type: "with", payload: e.target.value })
                  }
                  required
                >
                  <option value="">Select</option>
                  <option value="Biotin, Redensyl, Anagain">
                    Biotin, Redensyl, Anagain
                  </option>
                  <option value="5% Minoxidil, Biotin">
                    5% Minoxidil, Biotin
                  </option>
                  <option value="Minoxidil, Finasteride, Biotin">
                    Minoxidil, Finasteride, Biotin
                  </option>
                  <option value="Medical grade silicone">
                    Medical grade silicone
                  </option>
                  <option value="Natural Caffeine, Citrulline">
                    Natural Caffeine, Citrulline
                  </option>
                  <option value="24g of Protein">24g of Protein</option>
                  <option value="Omega 3, DHA, EPA">Omega 3, DHA, EPA</option>
                  <option value="Ashwagandha, Safed Museli">
                    Ashwagandha, Safed Museli
                  </option>
                  <option value="Minoxidil & Biotin">Minoxidil & Biotin</option>
                  <option value="Biotin, Creatine & D-aspart">
                    Biotin, Creatine & D-asparti
                  </option>
                </select>
              </label>
              <br />

              <label>
                {" Category"}

                <br />
                <select
                  id=""
                  value={state.category}
                  onChange={(e) =>
                    dispatch({ type: "category", payload: e.target.value })
                  }
                  required
                >
                  <option value="">Select</option>
                  <option value="hair">Hair</option>
                  <option value="nutrition">Nutrition</option>
                  <option value="beard">Beard</option>
                </select>
              </label>
              <br />

              <label>
                {" Rating"}

                <br />
                <select
                  id=""
                  value={state.rating}
                  onChange={(e) =>
                    dispatch({ type: "rating", payload: e.target.value })
                  }
                  required
                >
                  <option value="">Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </label>
              <br />

              <label>
                {"New Product "}

                <br />
                <select
                  id=""
                  value={state.newlaunch}
                  onChange={(e) =>
                    dispatch({ type: "newlaunch", payload: e.target.value })
                  }
                >
                  <option value="">Select</option>
                  <option value="true">True</option>
                  <option value="false">Fasle</option>
                </select>
              </label>
              <button>Add Item</button>
            </form>
          </div>
        </motion.div>
        <div className="img2">
          <img src={DoctorImg} alt="" />
        </div>
      </div>
    </>
  );
};

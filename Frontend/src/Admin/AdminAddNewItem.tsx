import "../Styles/AdminAddNewItem.css";
import DoctorImg from '../Images/Add-New-Item/DoctorImg.png'
import { motion } from "framer-motion";

export const AdminAddNewItem = () => {

  const swipeAnimationRight = {
    initial: { x: "+100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.7, delay: 0.3 },
  };
  function handleAddNewItem() {
    console.log("Add New Item");
  }

  return (
    <div id="main-box">
      <div className="img1">
      <motion.div {...swipeAnimationRight}>
        <img src={DoctorImg} alt="" />
      </motion.div>
      </div>
      
      <div id="form-box">
      <h2 id="heading">Add New Item</h2>
        <form onSubmit={handleAddNewItem}>
          <label>
            
            {" Image url 1"}
            <br />
            <input type="text" placeholder="image url 1" />
          </label>
          <br />
          <label>
            {" Image url 2"}
            
            <br />
            <input type="text" placeholder="image url 2" />
          </label>
          <br />

          <label>
            {"Image url 3 "}
            
            <br />
            <input type="text" placeholder="image url 3" />
          </label>
          <br />

          <label>
            {"Image url 4"}
            
            <br />
            <input type="text" placeholder="image url 4" />
          </label>
          <br />

          <label>
            {" Price"}
            
            <br />
            <input type="text" placeholder="price" />
          </label>
          <br />

          <label>
            {" Title"}
            
            <br />
            <input type="text" placeholder="title" />
          </label>
          <br />

          <label>
            {"For "}
            
            <br />
            <select id="">
              <option value="">Select</option>
              <option value="">Stage 1 Hair Fall</option>
              <option value="">Stage 2 Hair Loss</option>
              <option value="">Stage 3 & 4 Hair Fall</option>
              <option value="">Stage 4 Hair Fall</option>
              <option value="">Beard Growth</option>
              <option value="">Thicker and stronger beard</option>
              <option value="">Dense and thick beard</option>
              <option value="">Nutrition & Post workout</option>
              <option value="">Better physical, brain health</option>
              <option value="">Better energy & Metabolism</option>
            </select>
          </label>
          <br />

          <label>
            {"Stage "}
            
            <br />
            <select id="">
              <option value="">Select</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
            </select>
          </label>
          <br />

          <label>
            {"With "}
            
            <br />
            <select id="">
              <option value="">Select</option>
              <option value="">Biotin, Redensyl, Anagain</option>
              <option value="">5% Minoxidil, Biotin</option>
              <option value="">Minoxidil, Finasteride, Biotin</option>
              <option value="">Medical grade silicone</option>
              <option value="">Natural Caffeine, Citrulline</option>
              <option value="">24g of Protein</option>
              <option value="">Omega 3, DHA, EPA</option>
              <option value="">Ashwagandha, Safed Museli</option>
              <option value="">Minoxidil & Biotin</option>
              <option value="">Biotin, Creatine & D-asparti</option>
            </select>
          </label>
          <br />

          <label>
            {" Category"}
            
            <br />
            <select id="">
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
            <select id="">
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
            <select id="">
              <option value="">Select</option>
              <option value="true">True</option>
              <option value="false">Fasle</option>
            </select>
          </label>
          <button>Add Item</button>
        </form>
      </div>
      <div className="img2">
        <motion.div {...swipeAnimationRight}>
          <img src={DoctorImg} alt="" />
        </motion.div>
      </div>
    </div>
  );
};

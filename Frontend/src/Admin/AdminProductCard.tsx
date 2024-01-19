
import { Link, useLocation } from "react-router-dom";
import {  StarIcon } from "@chakra-ui/icons";
import {    useState } from "react";
import {
  Badge,
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { Pencil, Trash2 } from "lucide-react";
import axios from "axios";


const AdminProductCard = ({ property }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const location = useLocation();
  const [Data, setData] = useState(property);
  

  function handleChange(e: any) {
    const { name, value } = e.target;
    setData((prev: any) => {
      return {
        ...prev,
        [name]:
          name === "price" || name === "stage" || name === "rating"
            ? +value
            : value,
      };
    });
  }

  async function handleUpdate(props: any) {

    try {
      
      let id = props._id;
      const res = await axios.patch(`http://localhost:8080/product//update/${id}`, Data);
      
      
        if (res.data.msg === "item has been updated successfully") {
          toast({
            position: "top",
            duration: 2500,
            render: () => (
              <Box color="white" p={3} bg="#69d729">
                <b>Item Updated Successfully 👍</b>
              </Box>
            ),
          });
        } else {
          toast({
            position: "top",
            duration: 2500,
            render: () => (
              <Box color="white" p={3} bg="#d74029">
                <b>Something went wrong</b>
              </Box>
            ),
          });
        }
        onClose();
        window.location.reload();
      }catch(error){
        console.error("Error updating item:", error);
        toast({
          position: "top",
          duration: 2500,
          render: () => (
            <Box color="white" p={3} bg="#d74029">
              <b>Something went wrong</b>
            </Box>
          ),
        });
    }
  }

  async function handleDelete(id:any){
    try {
      await axios.delete(`http://localhost:8080/product/delete/${id}`)
      toast({
        position: "top",
        duration: 2500,
        render: () => (
          <Box color="white" p={3} bg="#69d729">
            <b>Item Deleted Successfully 👍</b>
          </Box>
        ),
      });
      window.location.reload();

    } catch (error) {
      toast({
        position: "top",
        duration: 2500,
        render: () => (
          <Box color="white" p={3} bg="#d74029">
            <b>Something went wrong</b>
          </Box>
        ),
      });
    }
  }

  


  return (

    <Box
      width={{ base: "", lg: "18vw" }}
      borderWidth="2px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Link
        to={`/product-detail/${property._id}`}
        replace
        state={{ redirectTo: location.pathname }}
      >
        <Box>
          <Box m="auto" height="28vh" width={{ base: "", lg: "18vw" }}>
            <Image
              src={property.image[0]}
              height="100%"
              width="100%"
              alt={property.image}
              loading={"lazy"}
            />
          </Box>
          <Box pt="0">
            <Box ml="8px" display="flex" alignItems="baseline">
              <Box display="flex" alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      color={i < property.rating ? "gold" : "gray.300"}
                    />
                  ))}
                <Box as="span" color="gray.600" fontSize="sm" ml="2">
                  {property.rating} reviews
                </Box>
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  New
                </Badge>
              </Box>
            </Box>
            <Box
              fontWeight="semibold"
              lineHeight="tight"
              as="h4"
              mt="1"
              isTruncated
              ml="8px"
            >
              {property.title}
            </Box>
            <Box
              fontWeight="semibold"
              lineHeight="tight"
              as="h4"
              mt="1"
              ml="8px"
              isTruncated
            >
              ₹{property.price}{" "}
              <span
                style={{ color: "gray", textDecorationLine: "line-through" }}
              >
                {property.price + 195}
              </span>
            </Box>
            <Box lineHeight="tight" as="h6" mt="1" isTruncated ml="8px">
              <Badge bg={"none"} color="#5194D1">
                For
              </Badge>{" "}
              {property.for}
            </Box>
            <Box lineHeight="tight" as="h6" mt="1" isTruncated ml="8px">
              <Badge bg={"none"} color="#5194D1">
                With
              </Badge>{" "}
              {property.with}
            </Box>
          </Box>
        </Box>
      </Link>
      <Box
        // border="1px solid"
        p="5px"
        display="flex"
        justifyContent="space-around"
        borderRadius="0 0 5px 5px"
      >
        <Button
          leftIcon={<Pencil size="15px" />}
          colorScheme="blue"
          variant="outline"
          onClick={onOpen}
        >
          Edit
        </Button>
        <Button
          leftIcon={<Trash2 size="15px" />}
          colorScheme="pink"
          variant="outline"
          onClick={()=>handleDelete(property._id)}
        >
          Delete
        </Button>
      </Box>
      {/*  */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>image url 1</FormLabel>
              <Input
                placeholder="image url 1"
                value={Data.image[0]}
                onChange={handleChange}
              />
              <FormLabel>image url 2</FormLabel>
              <Input
                placeholder="image url 2"
                value={Data.image[1]}
                onChange={handleChange}
              />
              <FormLabel>image url 3</FormLabel>
              <Input
                placeholder="image url 3"
                value={Data.image[2]}
                onChange={handleChange}
              />
              <FormLabel>image url 4</FormLabel>
              <Input
                placeholder="image url 4"
                value={Data.image[3]}
                onChange={handleChange}
              />
              <FormLabel>price</FormLabel>
              <Input
                placeholder="price"
                name="price"
                value={Data.price}
                onChange={handleChange}
              />
              <FormLabel>title</FormLabel>
              <Input
                placeholder="title"
                name="title"
                value={Data.title}
                onChange={handleChange}
              />
              <FormLabel>for</FormLabel>
              <Select
                id=""
                value={Data.for}
                name="for"
                onChange={handleChange}
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
              </Select>
              <FormLabel>stage</FormLabel>
              <Select
                id=""
                value={Data.stage}
                name="stage"
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </Select>
              <FormLabel>with</FormLabel>
              <Select
                id=""
                value={Data.with}
                name="with"
                onChange={handleChange}
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
              </Select>
              <FormLabel>category</FormLabel>
              <Select
                id=""
                value={Data.category}
                name="category"
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="hair">Hair</option>
                <option value="nutrition">Nutrition</option>
                <option value="beard">Beard</option>
              </Select>
              <FormLabel>rating</FormLabel>
              <Select
                id=""
                value={Data.rating}
                name="rating"
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Select>
              <FormLabel>New Product</FormLabel>
              <Select
                id=""
                value={Data.newlaunch}
                name="newlaunch"
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="true">True</option>
                <option value="false">Fasle</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={()=>handleUpdate(property)}>
              Update
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/*  */}
    </Box>
    
  );
};

export default AdminProductCard;

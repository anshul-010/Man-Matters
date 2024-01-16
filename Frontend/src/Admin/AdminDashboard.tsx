import { Box, Center,Heading } from "@chakra-ui/react"
import { AdminCards } from "./AdminCards"
import { CombinedChart } from "./Barchart"

export const AdminDashboard = () => {
  return (
    <Box>
      <Center><Heading m={4} color="#224980">Dashboard</Heading></Center>
      <AdminCards/>
      <CombinedChart/>
    </Box>
  )
}

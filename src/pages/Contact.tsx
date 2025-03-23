import { Grid2 } from "@mui/material";
import ContactCard from "../components/cards/ContactCard";
import { useGetContactQuery } from "../redux/contact/intext";

function Contact() {
  const { data, isLoading } = useGetContactQuery("");

  return (
    <>
      <h1>Contact Page</h1>
      {isLoading && <p>Loading...</p>}
      <Grid2 container>
        {data?.results.map((item) => {
          return (
            <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
              <ContactCard
                imageUrl="https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4841.jpg?semt=ais_hybrid"
                phone={item.phone}
                email={item.email}
                message={item.message}
                fullName={item.fullname}
              />
            </Grid2>
          );
        })}
      </Grid2>
    </>
  );
}

export default Contact;

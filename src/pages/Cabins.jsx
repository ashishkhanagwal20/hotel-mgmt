import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";
import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import AddCabin from "../features/cabins/AddCabin";
import Modal from "../ui/Modal";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter and Sort</p>
        {/* <img
        src="https://aibfjlutdblkmrgnsuxj.supabase.co/storage/v1/object/public/cabin-images/cabin_001.jpg"
        alt=""
      /> */}
      </Row>
      <Row>
        <CabinTable />
        <AddCabin />
        {/* <Button onClick={() => setShowForm((show) => !show)}>
          Add new Cabin
        </Button>
        {showForm && <CreateCabinForm />} */}
      </Row>
    </>
  );
}

export default Cabins;

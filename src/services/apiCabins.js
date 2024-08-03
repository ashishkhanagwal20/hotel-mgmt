import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  console.log(newCabin, id);
  const hasImagepath = newCabin.image?.startsWith?.(supabaseUrl);
  console.log(hasImagepath);
  const imageName = hasImagepath
    ? newCabin.image
    : `${Math.random()}-${newCabin.image.name}`.replace("/", "");
  const imagepath = hasImagepath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. Create/Edit Cabin
  let query = supabase.from("cabins");
  // A) CREATE
  if (!id) query = query.insert([{ ...newCabin, image: imagepath }]);

  // B)EDIT
  if (id)
    query = query
      .update({ ...newCabin, image: imagepath })
      .eq("id", id)
      .select();
  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  // 2. Upload Image
  if (hasImagepath) return data;
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);
  // 3. Delete the cabin if there was error uploading the corresponding image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabin Image could not be uploaded and cabin was not created"
    );
  }
  return data;
}

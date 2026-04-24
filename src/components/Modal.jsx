import { formUpload } from "../scripts/uploadGraphicForm.js";

export function UploadModal() {
  return (
    <>
      <div
        id="upload-modal-holder"
        className="
        w-full 
        min-h-svh 
        flex 
        items-center
        bg-black/90
        fixed
        justify-center
        z-50
        "
      >
          <form
            className="
          font-helvetica
          flex
          flex-col
          items-center
          bg-main-0
          rounded-xl
          p-2
          drop-shadow-lg
          "
            id="graphics-form-upload"
            onSubmit={formUpload}
          >
            <input
              type="text"
              id="title"
              placeholder="Title"
              className="border p-1 rounded-sm mb-2"
              required
            />
            <input
              type="text"
              id="imageUrl"
              placeholder="Image URL"
              className="border p-1 rounded-sm mb-2"
              required
            />
            <input
              type="text"
              id="imageGroup"
              placeholder="Image Group"
              className="border p-1 rounded-sm mb-2"
              required
            />
            <input
              type="text"
              id="category"
              list="graphic-category"
              placeholder="Category"
              className="border p-1 rounded-sm mb-5"
              required
            />
            <datalist id="graphic-category">
              <option>Static Ad</option>
              <option>Social Media Posts</option>
              <option>Infographics</option>
              <option>Posters</option>
              <option>Apparel</option>
              <option>Packagaging and Mockups</option>
              <option>Branding</option>
            </datalist>
            <input
              type="submit"
              className="p-1 rounded-sm bg-cherry-0 text-main-0 cursor-pointer"
            />
          </form>
      </div>
    </>
  );
}

export function UploadButton() {
  return (
    <>
      <div></div>
    </>
  );
}

import { ImageUp } from "lucide-react";
// import ImagePreview from "./ImagePreview";

interface ImageUploadFormProps {
	isVisible: boolean;
}

const ImageUploadForm = ({ isVisible }: ImageUploadFormProps) => {
	return (
		isVisible && (
			<div className="flex flex-col md:flex-row md:gap-8">
				{/* <ImagePreview {...inputs} /> */}

				<form className="mt-8 flex flex-col gap-4 border border-purple-600 p-8 rounded-xl">
					<p className="text-2xl font-bold ">Upload Image</p>

					<input
						type="text"
						name="title"
						className="bg-purple-500 px-4 py-2 rounded-sm outline-none text-zinc-900"
						placeholder="Image title"
					/>

					<input
						type="file"
						name="file"
						className="bg-purple-500 px-4 py-2 outline-none cursor-pointer rounded-sm text-zinc-900 file:mr-12 file:py-2 file:px-4 file:rounded-sm file:border file:font-semibold file:cursor-pointer file:border-zinc-900 file:text-zinc-900"
					/>

					<button
						type="submit"
						className="border rounded-sm px-3 py-2 cursor-pointer flex gap-2 justify-center disabled:bg-zinc-700 disabled:cursor-not-allowed disabled:border-none">
						<ImageUp /> Upload
					</button>
				</form>
			</div>
		)
	);
};

export default ImageUploadForm;

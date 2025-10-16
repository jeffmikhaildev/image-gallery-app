import { ImageUp } from "lucide-react";
import type { Inputs } from "../types";
import ImagePreview from "./ImagePreview";
import { useMemo } from "react";
// import ImagePreview from "./ImagePreview";

interface ImageUploadFormProps {
	isVisible: boolean;
	inputs: Inputs;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleSubmit: (e: React.FormEvent) => void;
}

const ImageUploadForm = ({ isVisible, inputs, handleChange, handleSubmit }: ImageUploadFormProps) => {
	const isDisabled = useMemo(() => {
		return !!Object.values(inputs).some((input) => !input);
	}, [inputs]);

	return (
		isVisible && (
			<div className="flex flex-col md:flex-row md:gap-8">
				<ImagePreview {...inputs} />

				<form
					onSubmit={handleSubmit}
					className="mt-8 flex flex-col gap-4 border border-purple-600 p-8 rounded-xl">
					<p className="text-2xl font-bold ">Upload Image</p>

					<input
						type="text"
						name="title"
						className="bg-purple-500 px-6 py-3 rounded-sm outline-none text-zinc-900"
						placeholder="Image title"
						onChange={handleChange}
					/>

					<input
						type="file"
						name="file"
						className="bg-purple-500 px-4 py-2 outline-none cursor-pointer rounded-sm text-zinc-900 file:mr-12 file:py-1 file:px-2 file:rounded-sm file:border file:font-semibold file:cursor-pointer file:border-zinc-900 file:text-zinc-900"
						onChange={handleChange}
					/>

					<button
						type="submit"
						disabled={isDisabled}
						className="border rounded-sm px-6 py-3 cursor-pointer flex gap-2 justify-center disabled:bg-zinc-700 disabled:cursor-not-allowed disabled:border-none">
						<ImageUp /> Upload
					</button>
				</form>
			</div>
		)
	);
};

export default ImageUploadForm;

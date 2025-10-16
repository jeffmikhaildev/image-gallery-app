import { useState } from "react";
import ImageUploadForm from "../components/ImageUploadForm";
import { Plus, X } from "lucide-react";

const myPhotos = [
	"https://cdn.pixabay.com/photo/2023/12/11/12/51/lynx-8443540_1280.jpg",
	"https://cdn.pixabay.com/photo/2016/11/23/13/22/adorable-1852815_1280.jpg",
	"https://cdn.pixabay.com/photo/2016/11/20/11/09/winter-1842508_1280.jpg",
	"https://cdn.pixabay.com/photo/2016/11/29/04/53/penguin-1867414_1280.jpg",
	"https://cdn.pixabay.com/photo/2024/12/31/01/02/costa-rica-9301364_1280.jpg",
	"https://cdn.pixabay.com/photo/2020/05/04/14/14/cat-5129332_1280.jpg",
	"https://cdn.pixabay.com/photo/2023/08/08/12/02/lama-8177178_1280.jpg",
	"https://cdn.pixabay.com/photo/2023/07/26/14/35/rottweiler-8151358_1280.jpg",
	"https://cdn.pixabay.com/photo/2023/08/19/08/46/ai-generated-8200081_1280.jpg",
	"https://cdn.pixabay.com/photo/2020/07/21/12/59/raven-5426192_1280.jpg",
	"https://cdn.pixabay.com/photo/2017/01/12/18/10/dog-1975286_1280.jpg",
	"https://cdn.pixabay.com/photo/2022/11/02/04/49/meerkat-7563989_1280.jpg",
];

const GalleryPage = () => {
	const [imageUploadFormVisible, setImageeUploadFormVisible] = useState(false);

	return (
		<section className="flex flex-col gap-12">
			{/* FORM TOGGLE */}
			<div className="flex flex-col items-center gap-4">
				<button
					onClick={() => setImageeUploadFormVisible(!imageUploadFormVisible)}
					className="bg-purple-500 text-zinc-900 rounded-sm px-4 py-3 cursor-pointer flex gap-2 font-bold self-end">
					{imageUploadFormVisible ? (
						<>
							<X /> Close Form
						</>
					) : (
						<>
							<Plus /> Upload Image
						</>
					)}
				</button>

				{/* IMAGE UPLOAD FORM */}
				<ImageUploadForm isVisible={imageUploadFormVisible} />
			</div>

			<p>Count</p>

			<div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
				{myPhotos.map((photo, index) => (
					<figure
						key={index}
						className="size-full">
						<img
							src={photo}
							alt="sample photos"
							className="rounded-sm size-full object-cover"
						/>
					</figure>
				))}
			</div>
		</section>
	);
};

export default GalleryPage;

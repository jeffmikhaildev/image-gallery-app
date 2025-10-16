interface ImagePreviewProps {
	path: string | null;
}

const ImagePreview = ({ path }: ImagePreviewProps) => {
	return (
		<figure>
			<img
				// src={path}
				alt="image preview"
				className="size-80 rounded-sm object-cover"
			/>
		</figure>
	);
};

export default ImagePreview;

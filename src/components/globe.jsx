import IconCloud from "./ui/icon-cloud";

const slugs = [
  "java",
  "c",
  "cplusplus",
  "python",
  "html5",
  "css3",
  "javascript",
  "git",
  "github",
  "linux",
  "mysql",
  "postgresql",
  "opencv",
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;

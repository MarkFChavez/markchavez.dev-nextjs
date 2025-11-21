export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 inset-x-0 bg-[#F8F6F0] py-2">
      <div className="px-2 text-center">
        <span>{currentYear}.</span>
      </div>
    </footer>
  );
}

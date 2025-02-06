export default function Footer() {
    return (
      <footer className="w-full bg-primary text-primary-foreground p-4 mt-auto text-center">
        <p>&copy; {new Date().getFullYear()} Travel Management System. All rights reserved.</p>
      </footer>
    );
  }
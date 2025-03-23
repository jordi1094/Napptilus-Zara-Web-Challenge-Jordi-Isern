import { render, screen, fireEvent } from "@testing-library/react";
import BackButtonFrame from "./index";
import { useRouter } from "next/navigation";
import Image from "next/image";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }) => <Image src={src} alt={alt} />,
}));

describe("BackButtonFrame Component", () => {
  const mockRouter = {
    back: jest.fn(),
  };

  beforeEach(() => {
    useRouter.mockReturnValue(mockRouter);
  });

  test("debe renderizar el componente correctamente", () => {
    render(<BackButtonFrame />);

    expect(screen.getByText("BACK")).toBeInTheDocument();
    expect(screen.getByAltText("Go back icon")).toBeInTheDocument();
  });

  test("debe llamar a router.back cuando se hace clic en el botón", () => {
    render(<BackButtonFrame />);

    const backButton = screen.getByText("BACK");
    fireEvent.click(backButton);

    expect(mockRouter.back).toHaveBeenCalled();
  });
});

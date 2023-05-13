import AllCategories from "./AllCategories";
import LeftSubLinks from "./LeftSubLinks";
import RightSubLinks from "./RightSubLinks";

function SubHeader() {
  return (
    <div className="bg-white shadow h-10 border-t">
      <div className="container mx-auto flex items-center justify-between px-4 lg:p-0">
        {/* left section */}
        <div className="flex items-center -ml-2">
          <AllCategories />
          <LeftSubLinks />
        </div>
        {/* left section ends */}
        {/* right section */}
        <div className="hidden md:block">
          <RightSubLinks />
        </div>
        {/* right section ends */}
      </div>
    </div>
  );
}

export default SubHeader;

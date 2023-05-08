import Image from "next/image";

function KeyCategories({ keyCategories }) {
  return (
    <div className="w-full h-full">
      <h4 className="font-roboto text-base mb-3">Key Categories</h4>
      <div className="py-2">
        <table>
          <tbody>
            {keyCategories.map((item, index) => (
              <tr key={index} className="hover:bg-gray-200">
                <td className="py-1">
                  <div className="w-6 h-6 bg-gray-200 border rounded-full flex items-center justify-center">
                    <Image
                      src={item.icon}
                      className="w-5 block rounded-full"
                      alt={item.text}
                    />
                  </div>
                </td>
                <td className="text-sm py-1 pl-2">{item.text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default KeyCategories;

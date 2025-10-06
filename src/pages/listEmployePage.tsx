import Header from "../layouts/header";
import image from "../assets/consult_employee_image.svg";
import SelectCount from "../components/selectCount";
import InputSearch from "../components/inputSearch";
import HeroHeader from "../layouts/heroHeader";

/**
 * This component return `ListEmployePage`, a page of `HRnet`
 */
export default function ListEmployePage() {
  return (
    <div className="w-3xl">
      <Header to="/" showClose={true} />
      <HeroHeader img={image} alt="illustration" />
      <section className="flex justify-between px-16">
        <SelectCount />
        <InputSearch />
      </section>
      <main>
        <table className="mt-8 min-w-full table-fixed">
          <thead className="bg-neutral-800 text-sm text-neutral-200">
            <tr>
              <th className="rounded-tl-xl bg-neutral-800 p-3 text-left">
                name
              </th>
              <th className="bg-neutral-800 p-3 text-left">birth</th>
              <th className="bg-neutral-800 p-3 text-left">start</th>
              <th className="bg-neutral-800 p-3 text-left">street</th>
              <th className="bg-neutral-800 p-3 text-left">city</th>
              <th className="bg-neutral-800 p-3 text-left">country</th>
              <th className="bg-neutral-800 p-3 text-left">dep</th>
              <th className="rounded-tr-xl bg-neutral-800 p-3 text-left">
                code
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </main>
    </div>
  );
}

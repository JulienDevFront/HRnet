import add_employee from "../assets/add_employee_image.svg";
import Input from "../components/input";
import Header from "../layouts/header";
import Footer from "../layouts/footer";

export default function AddEmployePage() {
	return (
		<div>
			<Header to="/" showClose={true} />
			<aside>
				<img src={add_employee} alt="Illustration" />
			</aside>
			<form>
				<Input label="name" type="text" placeholder="Harry" />
				<Input label="last name" type="text" placeholder="Potter" />
				<Input label="email address" type="email" placeholder="HarryPotter@gmail.com" />
				<Input label="date of birth" type="date" placeholder="" />
				<Input label="date of start" type="date" placeholder="" />
				<fieldset>
					<Input label="street" type="text" placeholder="street 3/4" />
					<Input label="city" type="text" placeholder="london" />
					<Input label="country" type="text" placeholder="England" />
				</fieldset>
				<fieldset>
					<Input label="department" type="text" placeholder="griffon d'or" />
					<Input label="zip code" type="number" placeholder="731" />
				</fieldset>
				<input type="submit" value="create" />
			</form>
			<Footer />
		</div>
	);
}

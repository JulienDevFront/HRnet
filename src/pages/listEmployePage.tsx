import Header from "../layouts/header";
import consult_employee from "../assets/images/consult_employee_image.svg";

export default function ListEmployePage() {
	return (
		<div>
			<Header to="/" showClose={true} />
			<aside>
				<img src={consult_employee} alt="Illustration" />
			</aside>
			<section>
				<label>
					show
					<input type="text" />
					entries
				</label>
				<label>
					search
					<input type="search" />
				</label>
			</section>
			<main>
				<table>
					<thead>
						<tr>
							<th>name</th>
							<th>last</th>
							<th>birth</th>
							<th>start</th>
							<th>street</th>
							<th>city</th>
							<th>country</th>
							<th>dep</th>
							<th>code</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Harry</td>
							<td>Potter</td>
							<td>31-juillet-1980</td>
							<td>1-septembre-1991</td>
							<td>1-septembre-1991</td>
							<td>street 3/4</td>
							<td>London</td>
							<td>UK</td>
							<td>731</td>
						</tr>
					</tbody>
				</table>
			</main>
		</div>
	);
}

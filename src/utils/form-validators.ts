export function showError(field: string, message: string) {
	if (!field) {
		return;
	}
	let errorElement = document.querySelector(
		`*[name=${field}] + .error-message`,
	);
	if (!errorElement) {
		return;
	}
	errorElement.parentElement.classList.add("error");
	errorElement.textContent = message;
}

export function clearError(field: string) {
	if (!field) {
		return;
	}
	let errorElement = document.querySelector(
		`*[name=${field}] + .error-message`,
	);
	if (!errorElement) {
		return;
	}
	errorElement.parentElement.classList.remove("error");
	errorElement.textContent = "";
}

export function validateRegistrationForm(form: HTMLFormElement): boolean {
	let isValid = true;

	const inputs = form.querySelectorAll<
		HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
	>(
		"input[type='text'][required], input[type='email'][required], input[type='tel'][required], select[required], textarea[required]",
	);
	for (const input of inputs) {
		if (input.value.trim() === "") {
			showError(input.name, "This field is required.");
			isValid = false;
		} else if (
			input.name === "nic" &&
			!/^\d{9}([vV]|\d{3})$/.test(input.value)
		) {
			showError(input.name, "Invalid NIC format.");
			isValid = false;
		} else if (
			input.name === "email" &&
			!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)
		) {
			showError(input.name, "Invalid email format.");
			isValid = false;
		} else if (
			input.name === "phone" &&
			!/^(\d|\+94)\d{9}$/.test(input.value)
		) {
			showError(input.name, "Invalid phone number.");
			isValid = false;
		} else if (input.name === "name" && input.value.length < 3) {
			showError(input.name, "Full name must be at least 3 characters long.");
			isValid = false;
		} else if (input.name === "address" && input.value.length < 5) {
			showError(input.name, "Address must be at least 5 characters long.");
			isValid = false;
		} else {
			clearError(input.name);
		}
	}

	const fileInputs = form.querySelectorAll<HTMLInputElement>(
		"input[type='file'][required]",
	);

	for (const fileInput of fileInputs) {
		if (!fileInput.files || fileInput.files.length === 0) {
			showError(fileInput.name, "You have to upload the file.");
			isValid = false;
		} else {
			clearError(fileInput.name);
		}
	}

	return isValid;
}

function unsavedChangesWarning(event: BeforeUnloadEvent) {
	event.preventDefault();
	event.returnValue = "";
}

export function addUnsavedChangesWarning() {
	window.addEventListener("beforeunload", unsavedChangesWarning);
}

export function removeUnsavedChangesWarning() {
	window.removeEventListener("beforeunload", unsavedChangesWarning);
}

export function showFormResponse(
	type: "error" | "success" | "reset",
	message: string,
) {
	const responseElement = document.querySelector(".form-response");
	if (!responseElement) {
		return;
	}
	if (type === "reset") {
		responseElement.textContent = "";
		return;
	}
	responseElement.textContent = message;
	responseElement.classList.toggle("text-green-600", type === "success");
	responseElement.classList.toggle("text-red-600", type === "error");
}

module.exports = function (plop) {
	plop.setGenerator("component", {
		description: "Generate a new component",
		prompts: [
			{
				type: "input",
				name: "name",
				message: "What will your component be named? (eg. Component Name)",
			},
			{
				type: "list",
				name: "type",
				choices: ["Atoms", "Molecules", "Organisms", "Templates"],
				message: "Where will your component sit?",
			},
		],
		actions(data) {
			const actions = [];

			actions.push({
				type: "add",
				path: "src/{{dashCase name}}/{{dashCase name}}.jsx",
				templateFile: "templates/component.hbs",
				data,
			});

			actions.push({
				type: "add",
				path: "src/{{dashCase name}}/{{dashCase name}}.module.scss",
				templateFile: "templates/component.module.scss.hbs",
				data,
			});

			actions.push({
				type: "add",
				path: "src/{{dashCase name}}/{{dashCase name}}.stories.jsx",
				templateFile: "templates/component.stories.hbs",
				data,
			});

			actions.push({
				type: "add",
				path: "src/{{dashCase name}}/{{dashCase name}}.test.jsx",
				templateFile: "templates/component.test.hbs",
				data,
			});

			actions.push({
				type: "add",
				path: "src/{{dashCase name}}/{{dashCase name}}.spec.js",
				templateFile: "templates/component.spec.hbs",
				data,
			});

			actions.push({
				type: "add",
				path: "src/{{dashCase name}}/index.jsx",
				templateFile: "templates/component.index.hbs",
				data,
			});

			actions.push({
				path: "index.js",
				pattern: /(\/\/ COMPONENT IMPORTS)/g,
				template:
					'export { default as {{pascalCase name}} } from "./src/{{dashCase name}}";',
				type: "append",
			});

			return actions;
		},
	});
};

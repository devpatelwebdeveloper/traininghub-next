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
				path: "src/{{dashCase name}}/styles.css.js",
				templateFile: "templates/component.styles.hbs",
				data,
			});

			actions.push({
				type: "add",
				path: "src/{{dashCase name}}/{{dashCase name}}.stories.mdx",
				templateFile: "templates/component.storybook.hbs",
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

			// actions.push({
			// 	type: "append",
			// 	path: "src/index.jsx",
			// 	template: `export { default as {{pascalCase name}} } from './{{dashCase name}}';`,
			// 	data,
			// });

			actions.push({
				path: "src/index.js",
				pattern: /(\/\/ COMPONENT IMPORTS)/g,
				template:
					'export { default as {{pascalCase name}} } from "./{{dashCase name}}";',
				type: "append",
			});

			return actions;
		},
	});
};

import React from 'react';
import styled from 'styled-components';

const Style = styled.div`
	footer {
		padding: 1.5em;
		text-align: center;
		background: var(--darkest-color);
		color: var(--lightest-color);

		ul {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0;
			padding: 0;

			li {
				display: block;
				margin: 0 0.5em 1em;
				padding: 0;

				a {
					display: block;
					color: currentColor;
					text-decoration: none;

					svg {
						display: block;
					}
				}
			}
		}
	}
`;

const Footer: React.FunctionComponent = () => {
	return (
		<Style>
			<footer role="contentinfo">
				<ul>
					<li>
						<a href="https://github.com/markuplint/markuplint" target="_blank">
							<svg width="24" height="24" viewBox="0 0 24 24">
								<path
									aria-label="Github"
									fill="currentColor"
									d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.806 1.304 3.49.997.108-.776.42-1.306.763-1.605-2.665-.305-5.467-1.334-5.467-5.93 0-1.312.47-2.382 1.236-3.222-.125-.303-.536-1.524.116-3.176 0 0 1.008-.322 3.3 1.23A11.51 11.51 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.236 1.91 1.236 3.22 0 4.61-2.807 5.625-5.48 5.922.43.372.824 1.102.824 2.222v3.293c0 .32.192.694.8.576C20.567 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"
								/>
							</svg>
						</a>
					</li>
					<li>
						<a href="https://twitter.com/markuplint" target="_blank">
							<svg width="24" height="24" viewBox="0 0 24 24">
								<path
									aria-label="Twitter"
									fill="currentColor"
									d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-3.594-1.555c-3.18 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.67 3.15a4.93 4.93 0 0 0 1.524 6.573 4.903 4.903 0 0 1-2.23-.616c-.053 2.28 1.582 4.415 3.95 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.42A9.9 9.9 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.72 13.995-14.646A10.025 10.025 0 0 0 24 4.556z"
								/>
							</svg>
						</a>
					</li>
				</ul>
				<small>Copyright©{new Date().getFullYear()} markuplint. Under the MIT License.</small>
			</footer>
		</Style>
	);
};

export default Footer;

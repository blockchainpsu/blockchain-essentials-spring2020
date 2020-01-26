%% Author: Justin Huang

%--------------------------------------------------
%                 Identification
%--------------------------------------------------
\ProvidesClass{notes}[2020/01/15 Notes for Justin]
\NeedsTeXFormat{LaTeX2e}

%--------------------------------------------------                             
%                  Class Options
%-------------------------------------------------- 
% Inherit options of article
\DeclareOption*{%
	\PassOptionsToClass{\CurrentOption}{article}
}
\ProcessOptions\relax
\LoadClass{article}

%--------------------------------------------------                             
%                    Packages
%-------------------------------------------------- 
\RequirePackage{xltxtra}
\RequirePackage{geometry}
\RequirePackage{fontawesome} % from https://github.com/posquit0/latex-fontawesome
\RequirePackage{parskip}

%--------------------------------------------------                             
%                      Fonts
%--------------------------------------------------
% Change main font to VictorMono for ligatures
\setmainfont[Path = latex-template/fonts/, UprightFont = *-Regular, BoldFont = *-Bold, ItalicFont = *-Italic, BoldItalicFont = *-BoldItalic] {NunitoSans}

\setfontfamily\FA[Path = latex-template/fonts/]{FontAwesome}
%--------------------------------------------------                             
%                  Layout Config
%-------------------------------------------------- 
% Notes info
\newcommand{\class}[1]{\def\@class{#1}}

% Disable auto-indent
% \setlength{\parindent}{0pt}

% Change nested unordered lists
\renewcommand{\labelitemi}{\faCircle}
\renewcommand{\labelitemii}{\faCircleO}
\renewcommand{\labelitemiii}{\faCodeFork}
\renewcommand{\labelitemiv}{\faGithubAlt}

% Custom Title Page
\renewcommand*{\maketitle}{%
	\begin{titlepage}
		\centering
		{\scshape\LARGE Pennsylvania State University \par}
		\vspace{1cm}
		{\scshape\Large\@class\unskip\strut\par}
		\vspace{1cm}
		{\huge\bfseries\@title\unskip\strut\par}
		\vspace{2cm}
		{\Large\itshape\@author\unskip\strut\par}
		\vfill
		{\large\@date\par}
	\end{titlepage}
}\endinput

\geometry{left=1cm, top = 1cm, right=1cm, bottom=1cm}


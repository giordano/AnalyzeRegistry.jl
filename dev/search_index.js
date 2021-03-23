var documenterSearchIndex = {"docs":
[{"location":"api/#API-reference","page":"API Reference","title":"API reference","text":"","category":"section"},{"location":"api/","page":"API Reference","title":"API Reference","text":"Modules = [AnalyzeRegistry]","category":"page"},{"location":"api/#AnalyzeRegistry.RegistryEntry","page":"API Reference","title":"AnalyzeRegistry.RegistryEntry","text":"RegistryEntry(path::String)\n\nLight data structure pointing to the directory where an entry of a registry is stored.\n\n\n\n\n\n","category":"type"},{"location":"api/#AnalyzeRegistry.analyze!-Tuple{Any, AbstractVector{AnalyzeRegistry.RegistryEntry}}","page":"API Reference","title":"AnalyzeRegistry.analyze!","text":"analyze!(root, registry_entries::AbstractVector{<:RegistryEntry}; auth::GitHub.Authorization=github_auth()) -> Vector{Package}\n\nAnalyze all packages in the iterable registry_entries, using threads, cloning them to root if a directory with their uuid does not already exist.  Returns a Vector{Package}.\n\nIf the GitHub authentication is non-anonymous and the repository is on GitHub, the list of contributors to the repositories is also collected.  See AnalyzeRegistry.github_auth to obtain a GitHub authentication.\n\n\n\n\n\n","category":"method"},{"location":"api/#AnalyzeRegistry.analyze!-Tuple{Any, AnalyzeRegistry.RegistryEntry}","page":"API Reference","title":"AnalyzeRegistry.analyze!","text":"analyze!(root, package::RegistryEntry; auth::GitHub.Authorization=github_auth()) -> Package\n\nAnalyze the package whose entry in the registry is in the dir directory, cloning the package code to joinpath(root, uuid) where uuid is the UUID of the package, if such a directory does not already exist.\n\nIf the GitHub authentication is non-anonymous and the repository is on GitHub, the list of contributors to the repository is also collected.  Only the number of contributors will be shown in the summary.  See AnalyzeRegistry.github_auth to obtain a GitHub authentication.\n\n\n\n\n\n","category":"method"},{"location":"api/#AnalyzeRegistry.analyze-Tuple{AbstractString}","page":"API Reference","title":"AnalyzeRegistry.analyze","text":"analyze(name_or_dir_or_url::AbstractString; repo = \"\", reachable=true, subdir=\"\", registry=general_registry(), auth::GitHub.Authorization=github_auth())\n\nAnalyze the package pointed to by the mandatory argument and return a summary of its properties.\n\nIf name_or_dir_or_url is a valid Julia identifier, it is assumed to be the name of a package available in registry.  The function then uses find_package to find its entry in the registry and analyze its content.\n\nIf name_or_dir_or_url is a filesystem path, analyze the package whose source code is located at name_or_dir_or_url. Optionally repo and reachable a boolean indicating whether or not the package is reachable online, since these can't be inferred from the source code.  The subdir keyword arguments indicates the subdirectory of dir under which the Julia package can be found.\n\nOtherwise, name_or_dir_or_url is assumed to be a URL. The repository is cloned to a temporary directory and analyzed.\n\nIf the GitHub authentication is non-anonymous and the repository is on GitHub, the list of contributors to the repository is also collected.  Only the number of contributors will be shown in the summary.  See AnalyzeRegistry.github_auth to obtain a GitHub authentication.\n\nExample\n\nYou can analyze a package just by its name, whether you have it installed locally or not:\n\njulia> analyze(\"Pluto\")\nPackage Pluto:\n  * repo: https://github.com/fonsp/Pluto.jl.git\n  * uuid: c3e4b0f8-55cb-11ea-2926-15256bba5781\n  * is reachable: true\n  * lines of Julia code in `src`: 5108\n  * lines of Julia code in `test`: 2342\n  * has license(s) in file: MIT\n    * filename: LICENSE\n    * OSI approved: true\n  * has license(s) in Project.toml: MIT\n    * OSI approved: true\n  * number of contributors: 63\n  * has documentation: false\n  * has tests: true\n  * has continuous integration: true\n    * GitHub Actions\n\n\n\n\n\n","category":"method"},{"location":"api/#AnalyzeRegistry.analyze-Tuple{Any}","page":"API Reference","title":"AnalyzeRegistry.analyze","text":"analyze(package::RegistryEntry; auth::GitHub.Authorization=github_auth()) -> Package\nanalyze(packages::AbstractVector{<:RegistryEntry}; auth::GitHub.Authorization=github_auth()) -> Vector{Package}\n\nAnalyzes a package or list of packages using the information in their directory in a registry by creating a temporary directory and calling analyze!, cleaning up the temporary directory afterwards.\n\nIf the GitHub authentication is non-anonymous and the repository is on GitHub, the list of contributors to the repository is also collected.  Only the number of contributors will be shown in the summary.  See AnalyzeRegistry.github_auth to obtain a GitHub authentication.\n\nExample\n\njulia> analyze(find_package(\"BinaryBuilder\"))\nPackage BinaryBuilder:\n  * repo: https://github.com/JuliaPackaging/BinaryBuilder.jl.git\n  * uuid: 12aac903-9f7c-5d81-afc2-d9565ea332ae\n  * is reachable: true\n  * lines of Julia code in `src`: 4724\n  * lines of Julia code in `test`: 1542\n  * has license(s) in file: MIT\n    * filename: LICENSE.md\n    * OSI approved: true\n  * number of contributors: 50\n  * has documentation: true\n  * has tests: true\n  * has continuous integration: true\n    * GitHub Actions\n    * Azure Pipelines\n\n\n\n\n\n\n","category":"method"},{"location":"api/#AnalyzeRegistry.analyze-Tuple{Module}","page":"API Reference","title":"AnalyzeRegistry.analyze","text":"analyze(m::Module) -> Package\n\nIf you want to analyze a package which is already loaded in the current session, you can simply call analyze, which uses pkgdir to determine its source code:\n\njulia> using DataFrames\n\njulia> analyze(DataFrames)\nPackage DataFrames:\n  * repo:\n  * uuid: a93c6f00-e57d-5684-b7b6-d8193f3e46c0\n  * is reachable: true\n  * lines of Julia code in `src`: 15347\n  * lines of Julia code in `test`: 15654\n  * has license(s) in file: MIT\n    * filename: LICENSE.md\n    * OSI approved: true\n  * has documentation: true\n  * has tests: true\n  * has continuous integration: true\n    * GitHub Actions\n\n\n\n\n\n","category":"method"},{"location":"api/#AnalyzeRegistry.analyze_path!-Tuple{AbstractString, AbstractString}","page":"API Reference","title":"AnalyzeRegistry.analyze_path!","text":"analyze_path!(dest::AbstractString, repo::AbstractString; name=\"\", uuid=UUID(UInt128(0)), subdir=\"\", auth=github_auth()) -> Package\n\nAnalyze the Julia package located at the URL given by repo by cloning it to dest and calling analyze_path(dest).\n\nIf the clone fails, it returns a Package with reachable=false. If a name and uuid are provided, these are used to populate the corresponding fields of the Package. If the clone succeeds, the name and uuid are taken instead from the Project.toml in the package itself, and the values passed here are ignored.\n\n\n\n\n\n","category":"method"},{"location":"api/#AnalyzeRegistry.analyze_path-Tuple{AbstractString}","page":"API Reference","title":"AnalyzeRegistry.analyze_path","text":"analyze_path(dir::AbstractString; repo = \"\", reachable=true, subdir=\"\", auth::GitHub.Authorization=github_auth()) -> Package\n\nAnalyze the package whose source code is located at the local path dir.\n\n\n\n\n\n","category":"method"},{"location":"api/#AnalyzeRegistry.find_package-Tuple{AbstractString}","page":"API Reference","title":"AnalyzeRegistry.find_package","text":"find_package(pkg; registry = general_registry()) -> RegistryEntry\n\nReturns the RegistryEntry for the package pkg. The singular version of find_packages.\n\n\n\n\n\n","category":"method"},{"location":"api/#AnalyzeRegistry.find_packages","page":"API Reference","title":"AnalyzeRegistry.find_packages","text":"find_packages(; registry = general_registry()) -> Vector{RegistryEntry}\nfind_packages(names::AbstractString...; registry = general_registry()) -> Vector{RegistryEntry}\nfind_packages(names; registry = general_registry()) -> Vector{RegistryEntry}\n\nFind all packages in the given registry (specified by the registry keyword argument), the General registry by default. Return a vector of RegistryEntry pointing to to the directories of each package in the registry.\n\nPass a list of package names as the first argument to return the paths corresponding to those packages, or individual package names as separate arguments.\n\n\n\n\n\n","category":"function"},{"location":"api/#AnalyzeRegistry.general_registry-Tuple{}","page":"API Reference","title":"AnalyzeRegistry.general_registry","text":"general_registry() -> String\n\nGuess the path of the General registry.\n\n\n\n\n\n","category":"method"},{"location":"api/#AnalyzeRegistry.github_auth","page":"API Reference","title":"AnalyzeRegistry.github_auth","text":"AnalyzeRegistry.github_auth(token::String=\"\")\n\nObtain a GitHub authetication.  Use the token argument if it is non-empty, otherwise use the GITHUB_TOKEN and GITHUB_AUTH environment variables, if set and of length 40.  If all these methods fail, return an anonymous authentication.\n\n\n\n\n\n","category":"function"},{"location":"serialization/#Saving-results","page":"Saving results","title":"Saving results","text":"","category":"section"},{"location":"serialization/","page":"Saving results","title":"Saving results","text":"In just four lines of code, we can setup serialization of collections of AnalyzeRegistry's Package object to Apache arrow tables:","category":"page"},{"location":"serialization/","page":"Saving results","title":"Saving results","text":"using Arrow, AnalyzeRegistry\nArrow.ArrowTypes.registertype!(AnalyzeRegistry.Package, AnalyzeRegistry.Package)\nsave(path, packages) = Arrow.write(path, (; packages))\nload(path) = copy(Arrow.Table(path).packages)","category":"page"},{"location":"serialization/","page":"Saving results","title":"Saving results","text":"Then we can do e.g.","category":"page"},{"location":"serialization/","page":"Saving results","title":"Saving results","text":"results = analyze(find_packages(\"DataFrames\", \"Flux\"));\nsave(\"packages.arrow\", results)\nroundtripped_results = load(\"packages.arrow\")\nrm(\"packages.arrow\") # hide","category":"page"},{"location":"serialization/","page":"Saving results","title":"Saving results","text":"Note that even if future versions of AnalyzeRegistry change the layout of Package's and you forget the version used to serialize the results, you can use the same load function without calling registertype! in the Julia session in order to deserialize the results back as NamedTuple's (instead of as Packages), providing some amount of robustness.","category":"page"},{"location":"#AnalyzeRegistry.jl","page":"Home","title":"AnalyzeRegistry.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The main functionality of the package is the analyze function:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using AnalyzeRegistry\n\njulia> analyze(\"Flux\")\nPackage Flux:\n  * repo: https://github.com/FluxML/Flux.jl.git\n  * uuid: 587475ba-b771-5e3f-ad9e-33799f191a9c\n  * is reachable: true\n  * lines of Julia code in `src`: 5074\n  * lines of Julia code in `test`: 2167\n  * has license(s) in file: MIT\n    * filename: LICENSE.md\n    * OSI approved: true\n  * number of contributors: 151\n  * has documentation: true\n  * has tests: true\n  * has continuous integration: true\n    * GitHub Actions\n    * Buildkite\n","category":"page"},{"location":"","page":"Home","title":"Home","text":"The argument is a string pointing towards a local path or the name of a package in a locally-installed registry (the General registry is checked by default).","category":"page"},{"location":"","page":"Home","title":"Home","text":"NOTE: the Git repository of the package will be cloned, in order to inspect its content.","category":"page"},{"location":"","page":"Home","title":"Home","text":"You can also pass a RegistryEntry, a simple datastructure which points to the directory of the package in the registry, where the file Package.toml is stored.  The function find_package gives you the RegistryEntry of a package in your local copy of any registry, by default the General registry. find_package is invoked automatically when you pass the name of a package.","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> analyze(find_package(\"JuMP\"))\nPackage JuMP:\n  * repo: https://github.com/jump-dev/JuMP.jl.git\n  * uuid: 4076af6c-e467-56ae-b986-b466b2749572\n  * is reachable: true\n  * lines of Julia code in `src`: 15551\n  * lines of Julia code in `test`: 10523\n  * has license(s) in file: MPL-2.0\n    * filename: LICENSE.md\n    * OSI approved: true\n  * number of contributors: 96\n  * has documentation: true\n  * has tests: true\n  * has continuous integration: true\n    * GitHub Actions","category":"page"},{"location":"","page":"Home","title":"Home","text":"Additionally, you can pass in the module itself:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using AnalyzeRegistry\n\njulia> analyze(AnalyzeRegistry)\nPackage AnalyzeRegistry:\n  * repo:\n  * uuid: e713c705-17e4-4cec-abe0-95bf5bf3e10c\n  * is reachable: true\n  * lines of Julia code in `src`: 481\n  * lines of Julia code in `test`: 97\n  * has license(s) in file: MIT\n    * filename: LICENSE\n    * OSI approved: true\n  * has documentation: true\n  * has tests: true\n  * has continuous integration: true\n    * GitHub Actions","category":"page"},{"location":"","page":"Home","title":"Home","text":"You use the inplace version analyze!, e.g. as analyze!(root, find_package(\"Flux\")) to clone the package to a particular directory root which is not cleaned up afterwards, and likewise can pass a vector of paths instead of a single path employ use a threaded loop to analyze each package.","category":"page"},{"location":"","page":"Home","title":"Home","text":"You can also directly analyze the source code of a package via analyze by passing in the path to it, for example with the pkgdir function:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using AnalyzeRegistry, DataFrames\n\njulia> analyze(pkgdir(DataFrames))\nPackage DataFrames:\n  * repo:\n  * uuid: a93c6f00-e57d-5684-b7b6-d8193f3e46c0\n  * is reachable: true\n  * lines of Julia code in `src`: 15347\n  * lines of Julia code in `test`: 15654\n  * has license(s) in file: MIT\n    * filename: LICENSE.md\n    * OSI approved: true\n  * has documentation: true\n  * has tests: true\n  * has continuous integration: true\n    * GitHub Actions","category":"page"},{"location":"#The-Package-struct","page":"Home","title":"The Package struct","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The returned values from analyze, and analyze! are objects of the type Package, which has the following fields:","category":"page"},{"location":"","page":"Home","title":"Home","text":"struct Package\n    name::String # name of the package\n    uuid::UUID # uuid of the package\n    repo::String # URL of the repository\n    subdir::String # subdirectory of the package in the repo\n    reachable::Bool # can the repository be cloned?\n    docs::Bool # does it have documentation?\n    runtests::Bool # does it have the test/runtests.jl file?\n    github_actions::Bool # does it use GitHub Actions?\n    travis::Bool # does it use Travis CI?\n    appveyor::Bool # does it use AppVeyor?\n    cirrus::Bool # does it use Cirrus CI?\n    circle::Bool # does it use Circle CI?\n    drone::Bool # does it use Drone CI?\n    buildkite::Bool # does it use Buildkite?\n    azure_pipelines::Bool # does it use Azure Pipelines?\n    gitlab_pipeline::Bool # does it use Gitlab Pipeline?\n    license_files::Vector{@NamedTuple{license_filename::String, licenses_found::Vector{String}, license_file_percent_covered::Float64}} # a table of all possible license files\n    licenses_in_project::Vector{String} # any licenses in the `license` key of the Project.toml\n    lines_of_code::Vector{@NamedTuple{directory::String, language::Symbol, sublanguage::Union{Nothing, Symbol}, files::Int, code::Int, comments::Int, blanks::Int}} # table of lines of code\n    contributors::Dict{String,Int} # Dictionary contributors => contributions\nend","category":"page"},{"location":"#Analyzing-multiple-packages","page":"Home","title":"Analyzing multiple packages","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"To run the analysis for multiple packages you can either use broadcasting","category":"page"},{"location":"","page":"Home","title":"Home","text":"analyze.(registry_entries)","category":"page"},{"location":"","page":"Home","title":"Home","text":"or use the method analyze(registry_entries::AbstractVector{<:RegistryEntry}) which runs the analysis with multiple threads.","category":"page"},{"location":"","page":"Home","title":"Home","text":"You can use the function find_packages to find all packages in a given registry:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> find_packages(; registry=general_registry())\n4632-element Vector{AnalyzeRegistry.RegistryEntry}:\n AnalyzeRegistry.RegistryEntry(\"/Users/eph/.julia/registries/General/C/CitableImage\")\n AnalyzeRegistry.RegistryEntry(\"/Users/eph/.julia/registries/General/T/Trixi2Img\")\n AnalyzeRegistry.RegistryEntry(\"/Users/eph/.julia/registries/General/I/ImPlot\")\n AnalyzeRegistry.RegistryEntry(\"/Users/eph/.julia/registries/General/S/StableDQMC\")\n AnalyzeRegistry.RegistryEntry(\"/Users/eph/.julia/registries/General/S/Strapping\")\n[...]","category":"page"},{"location":"","page":"Home","title":"Home","text":"Do not abuse this function! Consider using the in-place function analyze!(root, registry_entries) to avoid re-cloning packages if you might run the analysis more than once.","category":"page"},{"location":"","page":"Home","title":"Home","text":"warning: Warning\nCloning all the repos in General will take more than 20 GB of disk space and can take up to a few hours to complete.","category":"page"},{"location":"#License-information","page":"Home","title":"License information","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The license_files field of the Package object is a Tables.jl row table containing much more detailed information about any or all files containing licenses, identified by licensecheck via LicenseCheck.jl. For example, RandomProjectionTree.jl is dual licensed under both Apache-2.0 and the MIT license, and provides two separate license files. Interestingly, the README is also identified as containing an Apache-2.0 license; I've filed an issue to see if this is intentional.","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using AnalyzeRegistry, DataFrames\n\njulia> result = analyze(\"RandomProjectionTree\");\n\njulia> DataFrame(result.license_files)\n3×3 DataFrame\n Row │ license_filename  licenses_found  license_file_percent_covered\n     │ String            Vector{String}  Float64\n─────┼────────────────────────────────────────────────────────────────\n   1 │ LICENSE-APACHE    [\"Apache-2.0\"]                     100.0\n   2 │ LICENSE-MIT       [\"MIT\"]                            100.0\n   3 │ README.md         [\"Apache-2.0\"]                       6.34921","category":"page"},{"location":"","page":"Home","title":"Home","text":"Most packages contain a single file containing a license, and so have a single entry in the table.","category":"page"},{"location":"#Lines-of-code","page":"Home","title":"Lines of code","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The lines_of_code field of the Package object is a Tables.jl row table containing much more detailed information about the lines of code count (thanks to tokei) and can e.g. be passed to a DataFrame for further analysis.","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using AnalyzeRegistry, DataFrames\n\njulia> result = analyze(pkgdir(DataFrames));\n\njulia> DataFrame(result.lines_of_code)\n13×7 DataFrame\n Row │ directory        language  sublanguage  files  code   comments  blanks\n     │ String           Symbol    Union…       Int64  Int64  Int64     Int64\n─────┼────────────────────────────────────────────────────────────────────────\n   1 │ test             Julia                     27  15654       320    2109\n   2 │ src              Julia                     28  15347       794    1009\n   3 │ docs             Julia                      1     41         7       5\n   4 │ docs             TOML                       1      4         0       2\n   5 │ docs             Markdown                  14      0      3292     620\n   6 │ docs             Markdown  Julia            3     29         3       4\n   7 │ docs             Markdown  Python           1     13         0       1\n   8 │ docs             Markdown  R                1      2         0       0\n   9 │ Project.toml     TOML                       1     48         0       4\n  10 │ CONTRIBUTING.md  Markdown                   1      0        56       8\n  11 │ NEWS.md          Markdown                   1      0       112      10\n  12 │ LICENSE.md       Markdown                   1      0        22       1\n  13 │ README.md        Markdown                   1      0        21      10","category":"page"},{"location":"#Contributors-to-the-repository","page":"Home","title":"Contributors to the repository","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"If the package repository is hosted on GitHub and you can use GitHub authentication, the list of contributors is added to the contributors field of the Package object.  This is a dictionary whose keys are the GitHub usernames of the contributors, and the values are the corresponding numbers of contributions in that repository.","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using AnalyzeRegistry, DataFrames\n\njulia> result = analyze(\"DataFrames\");\n\njulia> users = collect(keys(result.contributors));\n\njulia> df = DataFrame(:User => users, :Contributions => map(x -> result.contributors[x], users));\n\njulia> sort!(df, [:Contributions, :User], rev=true)\n165×2 DataFrame\n Row │ User               Contributions\n     │ String             Int64\n─────┼──────────────────────────────────\n   1 │ johnmyleswhite               431\n   2 │ bkamins                      364\n   3 │ powerdistribution            232\n   4 │ nalimilan                    220\n   5 │ garborg                      173\n   6 │ quinnj                       101\n   7 │ simonster                     87\n   8 │ cjprybol                      50\n   9 │ alyst                         48\n  10 │ dmbates                       47\n  11 │ tshort                        39\n  12 │ doobwa                        32\n  13 │ HarlanH                       32\n  14 │ kmsquire                      30\n  15 │ pdeffebach                    19\n  16 │ ararslan                      19\n  ⋮  │         ⋮                ⋮","category":"page"},{"location":"#GitHub-authentication","page":"Home","title":"GitHub authentication","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"If you have a GitHub Personal Access Token, you can obtain some extra information about packages whose repository is hosted on GitHub (e.g. the list of contributors).  If you store the token as an environment variable called GITHUB_TOKEN or GITHUB_AUTH, this will be automatically used whenever possible, otherwise you can generate a GitHub authentication with the AnalyzeRegistry.github_auth function and pass it to the functions accepting the auth::GitHub.Authorization keyword argument.","category":"page"}]
}

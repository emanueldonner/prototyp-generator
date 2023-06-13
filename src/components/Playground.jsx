{
  demoOptions && (
    <section>
      <div className="wm-h-row">
        <h2>Einstellungen</h2>

        <wm-highlight>
          <form
            data-selector={`${selector}-preview`}
            data-prev-selector={`${selector}-preview`}
            className="pl-demo"
          >
            {demoOptions.map((option) => {
              if (option.type === "select") {
                return (
                  <p key={`${selector}_${option.key}`}>
                    <label htmlFor={`${selector}_${option.key}`}>
                      {option.label}
                    </label>
                    <select
                      id={`${selector}_${option.key}`}
                      data-attribute={option.attribute}
                      autoComplete="off"
                      data-dependency={option.dependencies
                        .map(
                          (dep, idx) =>
                            `${dep.key}, ${dep.attribute}, ${dep.value}, ${
                              dep.reset
                            }${
                              idx !== option.dependencies.length - 1 ? "#" : ""
                            }`
                        )
                        .join("")}
                    >
                      {option.options
                        ? option.options.map((opt) => (
                            <option
                              key={opt.value}
                              selected={opt.default}
                              value={opt.value}
                            >
                              {opt.label}
                            </option>
                          ))
                        : library[option.options_data].map((opt) => (
                            <option
                              key={opt.value}
                              selected={opt.default}
                              value={opt.value}
                            >
                              {opt.label}
                            </option>
                          ))}
                    </select>
                  </p>
                )
              }

              if (option.type === "range") {
                return (
                  <p key={`${selector}_${option.key}`}>
                    <label htmlFor={`${selector}_${option.key}`}>
                      {option.label}
                    </label>
                    <input
                      type="range"
                      id={`${selector}_${option.key}`}
                      min={option.min}
                      max={option.max}
                      value={option.value}
                      data-attribute={option.attribute}
                    ></input>
                    <span className="currentvalue">{option.value}</span>
                  </p>
                )
              }

              if (option.type === "text") {
                return (
                  <p key={`${selector}_${option.key}`}>
                    <label htmlFor={`${selector}_${option.key}`}>
                      {option.label}
                    </label>
                    <input
                      type="text"
                      id={`${selector}_${option.key}`}
                      value={option.value}
                      data-attribute={option.attribute}
                    ></input>
                  </p>
                )
              }

              return null
            })}

            {demoOptions.some((option) => option.type === "toggle") && (
              <wm-stack
                equal="false"
                grow="false"
                gapx="m"
                gapy="xs"
                wrap="true"
              >
                {demoOptions.map((option) => {
                  if (option.type === "toggle") {
                    return (
                      <div key={`${selector}_${option.key}`}>
                        <input
                          type="checkbox"
                          id={`${selector}_${option.key}`}
                          data-attribute={option.attribute}
                          data-boolean={option.boolean}
                          checked={option.checked}
                          data-selector={option.selector}
                          data-slot={option.slot}
                          data-dependency={option.dependencies
                            .map(
                              (dep, idx) =>
                                `${dep.key}, ${dep.attribute}, ${dep.value}, ${
                                  dep.reset
                                }${
                                  idx !== option.dependencies.length - 1
                                    ? "#"
                                    : ""
                                }`
                            )
                            .join("")}
                          autoComplete="off"
                        ></input>
                        <label htmlFor={`${selector}_${option.key}`}>
                          {option.label}
                        </label>
                      </div>
                    )
                  }

                  return null
                })}
              </wm-stack>
            )}
          </form>
        </wm-highlight>
      </div>
    </section>
  )
}

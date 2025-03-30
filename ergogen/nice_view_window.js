module.exports = {
  params: {
    designator: 'DISP',    // change it accordingly
    side: 'F',          // delete if not needed
    reversible: false,  // delete if not needed
    show_3d: false,     // delete if not needed
  },
  body: p => {
    const standard_opening = `(
         footprint "TB2086_MISC:Nice!View_window"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "F.Cu")
        (descr "Nice!View ")
        (tags "CONN DEV")
        (property "Reference" "${p.ref}" (at -0.02 24.47 ${180 + p.rot}) (layer "${p.side}.SilkS") ${p.ref_hide} (effects (font (size 0.8128 0.8128) (thickness 0.15))))
        (attr through_hole)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
    `
    const front_pads = `
    `
    const front_fabrication = `
    `
    const front_mask = `
    `
    const front_courtyard = `
    `
    const front_paste = `
    `
    const pads = `
    `
    const back_silkscreen = `
    `
    const back_pads = `
    `
    const back_fabrication = `
    `
    const back_mask = `
    `
    const back_courtyard = `
    `
    const back_paste = `
    `
    const edge_cuts = `
        (fp_line (start -7.56 -14.67) (end -7.56 17.83) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
        (fp_line (start -7.06 -15.17) (end 6.94 -15.17) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts") )
        (fp_line (start -7.06 18.33) (end 6.94 18.33) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts") )
        (fp_line (start 7.44 -14.67) (end 7.44 17.83) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
        (fp_arc (start -7.56 -14.67) (mid -7.413553 -15.023553) (end -7.06 -15.17) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts") )
        (fp_arc (start -7.06 18.33) (mid -7.413553 18.183553) (end -7.56 17.83) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts") )
        (fp_arc (start 6.94 -15.17) (mid 7.293553 -15.023553) (end 7.44 -14.67) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts") )
        (fp_arc (start 7.44 17.83) (mid 7.293553 18.183553) (end 6.94 18.33) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts") )
    `
    const user_drawing = `
        (fp_line (start -5.46 16.73) (end -5.46 -8.57) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") )
        (fp_line (start -5.46 16.73) (end 5.34 16.73) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") )
        (fp_line (start 5.34 -8.57) (end -5.46 -8.57) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") )
        (fp_line (start 5.34 16.73) (end 5.34 -8.57) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") )
    `
    const user_comments = `
    `
    const user_eco1 = `
    `
    const user_eco2 = `
    `
    const model = `
    `
    const standard_closing = `
            )
    `
    let final = standard_opening;
    final += front_silkscreen;
    final += front_pads;
    final += front_fabrication;
    final += front_mask;
    final += front_courtyard;
    final += front_paste;
    final += pads;
    final += back_silkscreen;
    final += back_pads;
    final += back_fabrication;
    final += back_mask;
    final += back_courtyard;
    final += back_paste;
    final += edge_cuts;
    final += user_drawing;
    final += user_comments;
    final += user_eco1;
    final += user_eco2;
    final += model;
    final += standard_closing;

    return final
  }
}

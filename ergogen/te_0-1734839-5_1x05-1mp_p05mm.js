module.exports = {
  params: {
    designator: 'J',    // change it accordingly
    side: 'F',          // delete if not needed
    reversible: false,  // delete if not needed
    show_3d: false,     // delete if not needed
    MP: {type: 'net', value: 'MP'}, // undefined}, // change to undefined as needed
    P2: {type: 'net', value: 'P2'}, // undefined}, // change to undefined as needed
    P4: {type: 'net', value: 'P4'}, // undefined}, // change to undefined as needed
    P3: {type: 'net', value: 'P3'}, // undefined}, // change to undefined as needed
    P5: {type: 'net', value: 'P5'}, // undefined}, // change to undefined as needed
    P1: {type: 'net', value: 'P1'}, // undefined}, // change to undefined as needed
  },
  body: p => {
    let fp_name="TE_0-1734839-5_1x05-1MP_P0.5mm_Horizontal"
    if (p.reversible) {
        fp_name = "TB2086_MISC:" + fp_name + "-rev";
    }
    const standard_opening = `(
         footprint "${fp_name}"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "F.Cu")
        (descr "TE FPC connector, 05 top-side contacts, 0.5mm pitch, SMT, https://www.te.com/commerce/DocumentDelivery/DDEController?Action=showdoc&DocId=Customer+Drawing%7F1734839%7FC%7Fpdf%7FEnglish%7FENG_CD_1734839_C_C_1734839.pdf%7F4-1734839-0")
        (tags "te fpc 1734839")
        (property "Reference" "${p.ref}" (at 0 -3.1 ${0 + p.rot}) (layer "${p.side}.SilkS") (hide yes) (effects (font (size 1 1) (thickness 0.15))))
        (attr smd)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (fp_line (start -4.075 2.04) (end -4.075 2.64) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -3.965 2.04) (end -4.075 2.04) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -1.2 -0.55) (end -1 -0.15) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -1 -0.15) (end -0.8 -0.55) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -0.8 -0.55) (end -1.2 -0.55) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start 3.965 2.04) (end 4.075 2.04) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start 4.075 2.04) (end 4.075 2.64) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
    `
    const front_pads = `
        (pad "1" smd rect (at -1 -1.35 ${p.rot}) (size 0.3 1.1) (layers "F.Cu" "F.Paste" "F.Mask")  ${p.P1})
        (pad "2" smd rect (at -0.5 -1.35 ${p.rot}) (size 0.3 1.1) (layers "F.Cu" "F.Paste" "F.Mask")  ${p.P2})
        (pad "3" smd rect (at 0 -1.35 ${p.rot}) (size 0.3 1.1) (layers "F.Cu" "F.Paste" "F.Mask")  ${p.P3})
        (pad "4" smd rect (at 0.5 -1.35 ${p.rot}) (size 0.3 1.1) (layers "F.Cu" "F.Paste" "F.Mask")  ${p.P4})
        (pad "5" smd rect (at 1 -1.35 ${p.rot}) (size 0.3 1.1) (layers "F.Cu" "F.Paste" "F.Mask")  ${p.P5})
        (pad "MP" smd rect (at -2.67 0.35 ${p.rot}) (size 2.3 3.1) (layers "F.Cu" "F.Paste" "F.Mask")  ${p.MP})
        (pad "MP" smd rect (at 2.67 0.35 ${p.rot}) (size 2.3 3.1) (layers "F.Cu" "F.Paste" "F.Mask")  ${p.MP})
    `
    const front_fabrication = `
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_line (start -3.965 2.15) (end -3.31 2.15) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -3.965 3.75) (end -3.965 2.15) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -3.31 -0.65) (end 3.31 -0.65) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -3.31 2.15) (end -3.31 -0.65) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -1.4 -0.65) (end -1 0.15) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -1 0.15) (end -0.6 -0.65) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start 3.31 -0.65) (end 3.31 2.15) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start 3.31 2.15) (end 3.965 2.15) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start 3.965 2.15) (end 3.965 3.75) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start 3.965 3.75) (end -3.965 3.75) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_text user "${p.ref}" (at 0 1.55 ${0 + p.rot}) (layer "F.Fab")  (effects (font (size 1 1) (thickness 0.15))))
    `
    const front_mask = `
    `
    const front_courtyard = `
        (fp_line (start -4.46 -2.4) (end -4.46 4.25) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start -4.46 4.25) (end 4.46 4.25) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 4.46 -2.4) (end -4.46 -2.4) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 4.46 4.25) (end 4.46 -2.4) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
    `
    const front_paste = `
    `
    const pads = `
    `
    const back_silkscreen = `
        (fp_line (start -4.075 2.04) (end -4.075 2.64) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start -3.965 2.04) (end -4.075 2.04) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 0.8 -0.55) (end 1.2 -0.55) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 1 -0.15) (end 0.8 -0.55) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 1.2 -0.55) (end 1 -0.15) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 3.965 2.04) (end 4.075 2.04) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 4.075 2.04) (end 4.075 2.64) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
    `
    const back_pads = `
        (pad "1" smd rect (at 1 -1.35 ${p.rot}) (size 0.3 1.1) (layers "B.Cu" "B.Paste" "B.Mask")  ${p.P1})
        (pad "2" smd rect (at 0.5 -1.35 ${p.rot}) (size 0.3 1.1) (layers "B.Cu" "B.Paste" "B.Mask")  ${p.P2})
        (pad "3" smd rect (at 0 -1.35 ${p.rot}) (size 0.3 1.1) (layers "B.Cu" "B.Paste" "B.Mask")  ${p.P3})
        (pad "4" smd rect (at -0.5 -1.35 ${p.rot}) (size 0.3 1.1) (layers "B.Cu" "B.Paste" "B.Mask")  ${p.P4})
        (pad "5" smd rect (at -1 -1.35 ${p.rot}) (size 0.3 1.1) (layers "B.Cu" "B.Paste" "B.Mask")  ${p.P5})
        (pad "MP" smd rect (at -2.67 0.35 ${p.rot}) (size 2.3 3.1) (layers "B.Cu" "B.Paste" "B.Mask")  ${p.MP})
        (pad "MP" smd rect (at 2.67 0.35 ${p.rot}) (size 2.3 3.1) (layers "B.Cu" "B.Paste" "B.Mask")  ${p.MP})
    `
    const back_fabrication = `
        (fp_line (start -3.965 2.15) (end -3.965 3.75) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
        (fp_line (start -3.965 3.75) (end 3.965 3.75) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
        (fp_line (start -3.31 -0.65) (end -3.31 2.15) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
        (fp_line (start -3.31 2.15) (end -3.965 2.15) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
        (fp_line (start 1 0.15) (end 0.6 -0.65) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
        (fp_line (start 1.4 -0.65) (end 1 0.15) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
        (fp_line (start 3.31 -0.65) (end -3.31 -0.65) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
        (fp_line (start 3.31 2.15) (end 3.31 -0.65) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
        (fp_line (start 3.965 2.15) (end 3.31 2.15) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
        (fp_line (start 3.965 3.75) (end 3.965 2.15) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
        (fp_text user "${p.ref}" (at 0 1.55 ${0 + p.rot}) (layer "B.Fab") (effects (font (size 1 1) (thickness 0.15)) (justify mirror)))
    `
    const back_mask = `
    `
    const back_courtyard = `
        (fp_line (start -4.46 -2.4) (end 4.46 -2.4) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start -4.46 4.25) (end -4.46 -2.4) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start 4.46 -2.4) (end 4.46 4.25) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
        (fp_line (start 4.46 4.25) (end -4.46 4.25) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
    `
    const back_paste = `
    `
    const edge_cuts = `
    `
    const user_drawing = `
        (property "Value" "PCB Edge" (at 0 3.25 ${0 + p.rot}) (layer "Dwgs.User")  (effects (font (size 0.5 0.5) (thickness 0.08))))
        (fp_line (start 3.855 2.75) (end -3.855 2.75) (stroke (width 0.1) (type solid)) (layer "Dwgs.User") )
    `
    const user_comments = `
    `
    const user_eco1 = `
    `
    const user_eco2 = `
    `
    let offset = "(xyz 0 -3.3 1)"
    let rotate = "(xyz 90 180 180)"
    if (p.side == "B") {
        offset = "(xyz 0 -3.1 -0.6)"
        rotate = "(xyz 90 0 180)"
    }
    const model = `
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/c-1734839-5-c-3d.step" (offset ${offset}) (scale (xyz 1 1 1)) (rotate ${rotate}))
    `
    const standard_closing = `
            )
    `
    let final = standard_opening;

    if (p.side == "F") {
       final += front_reference;
    }
    if (p.reversible || p.side == "F") {
       final += front_silkscreen;
       final += front_pads;
       final += front_fabrication;
       final += front_mask;
       final += front_courtyard;
       final += front_paste;
    }

    final += pads;

    if (p.reversible || p.side == "B") {
        final += back_silkscreen;
        final += back_pads;
        final += back_fabrication;
        final += back_mask;
        final += back_courtyard;
        final += back_paste;
    }

    final += edge_cuts;
    final += user_drawing;
    final += user_comments;
    final += user_eco1;
    final += user_eco2;

    if (p.show_3d) {
        final += model;
    }
    final += standard_closing;

    return final
  }
}

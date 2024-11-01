module.exports = {
  params: {
    designator: 'D',    // change it accordingly
    side: 'F',          // delete if not needed
    reversible: false,  // delete if not needed
    show_3d: false,
    P1: {type: 'net', value: undefined}, // change to undefined as needed
    P2: {type: 'net', value: undefined}, // change to undefined as needed
  },
  body: p => {
    const standard_opening = `(
         footprint "D3_SMD_rev"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "F.Cu")
        (descr "Resitance 3 pas")
        (tags "R")
        (attr through_hole)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (fp_line (start -2.7 -0.75) (end -2.7 0.75) (stroke (width 0.15) (type solid)) (layer "F.SilkS") (uuid "53e40036-449e-441d-97cd-caa7a42b952d"))
        (fp_line (start -2.7 0.75) (end 2.7 0.75) (stroke (width 0.15) (type solid)) (layer "F.SilkS") (uuid "8499fe0f-1628-4752-babe-44ee787faff0"))
        (fp_line (start -0.5 -0.5) (end -0.5 0.5) (stroke (width 0.15) (type solid)) (layer "F.SilkS") (uuid "e2b5c038-0291-4991-a98a-4088cbd75cbf"))
        (fp_line (start -0.4 0) (end 0.5 -0.5) (stroke (width 0.15) (type solid)) (layer "F.SilkS") (uuid "8909c490-44d5-4c31-811b-d772d84a1d1b"))
        (fp_line (start 0.5 -0.5) (end 0.5 0.5) (stroke (width 0.15) (type solid)) (layer "F.SilkS") (uuid "ff4ce578-342e-4451-a652-72404467e2a1"))
        (fp_line (start 0.5 0.5) (end -0.4 0) (stroke (width 0.15) (type solid)) (layer "F.SilkS") (uuid "6c4ae691-b48d-48f5-9b3b-38d5e557d968"))
        (fp_line (start 2.7 -0.75) (end -2.7 -0.75) (stroke (width 0.15) (type solid)) (layer "F.SilkS") (uuid "61605a7f-902a-4d2b-8c2d-ceeb874b0dd3"))
        (fp_line (start 2.7 -0.75) (end 2.7 0.75) (stroke (width 0.15) (type solid)) (layer "F.SilkS") (uuid "c3036a2b-5290-49a6-8d2c-d10b6c24c7ba"))
    `
    const front_pads = `
        (pad "1" smd rect (at -1.775 0 ${p.rot}) (size 1.3 0.95) (layers "F.Cu" "F.Paste" "F.Mask") (uuid "0ff96d88-f51c-4f22-b9a5-22edeed2021a") ${p.P1})
        (pad "1" smd rect (at -1.2 0 ${p.rot}) (size 0.6 0.4) (layers "F.Cu" "F.Paste" "F.Mask") (uuid "e32ecc25-c2d4-4744-8675-c28a902d403b") ${p.P1})
        (pad "2" smd rect (at 1.2 0 ${p.rot}) (size 0.6 0.4) (layers "F.Cu" "F.Paste" "F.Mask") (uuid "842bbd45-a048-4e78-a38f-5ccf718ed560") ${p.P2})
        (pad "2" smd rect (at 1.775 0 ${p.rot}) (size 1.3 0.95) (layers "F.Cu" "F.Paste" "F.Mask") (uuid "de3de12e-fc6a-4167-b4e5-41fdc1a65df8") ${p.P2})
    `
    const front_fabrication = `
        (property "Reference" "${p.ref}" (at 0.5 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "2562fb51-5ca0-4c16-a2e3-51668621502c") (effects (font (size 0.5 0.5) (thickness 0.125))))
        (property "Value" "D" (at -0.6 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "c1cbeddd-9c8c-4667-af36-cd55c72a6cfe") (effects (font (size 0.5 0.5) (thickness 0.125))))
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "22bca066-a11b-4cc6-ac76-86f6a86c2230") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "f19ebf40-1249-4c12-b28c-0506e9cf6730") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "0d11619f-bb96-4abc-b598-b6e6ae1907bd") (effects (font (size 1.27 1.27) (thickness 0.15))))
    `
    const front_mask = `
    `
    const front_courtyard = `
    `
    const front_paste = `
    `
    const pads = `
        (pad "1" thru_hole circle (at -0.889 0 ${p.rot}) (size 0.5 0.5) (drill 0.3) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "40edda35-ec11-4a6a-b5dc-2dec8e6c1803") ${p.P1})
        (pad "2" thru_hole circle (at 0.889 0 ${p.rot}) (size 0.5 0.5) (drill 0.3) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "6e4da85d-6e6d-4c76-9640-7acd1a486392") ${p.P2})
    `
    const back_silkscreen = `
        (fp_line (start -2.7 -0.75) (end -2.7 0.75) (stroke (width 0.15) (type solid)) (layer "B.SilkS") (uuid "96f56b7f-9892-4a99-87f4-d7a1faf8ddd1"))
        (fp_line (start -2.7 0.75) (end 2.7 0.75) (stroke (width 0.15) (type solid)) (layer "B.SilkS") (uuid "97b581b5-a8d8-49cb-9943-58c9fa106c20"))
        (fp_line (start -0.5 -0.5) (end -0.5 0.5) (stroke (width 0.15) (type solid)) (layer "B.SilkS") (uuid "350ba5dc-0159-4c83-a0f9-f0acfd66b0c1"))
        (fp_line (start -0.4 0) (end 0.5 -0.5) (stroke (width 0.15) (type solid)) (layer "B.SilkS") (uuid "592e4d30-c87d-4cac-b5b3-884ad7ca82df"))
        (fp_line (start 0.5 -0.5) (end 0.5 0.5) (stroke (width 0.15) (type solid)) (layer "B.SilkS") (uuid "52d25d25-7dbf-4ffe-9a54-dd9d14ab4a64"))
        (fp_line (start 0.5 0.5) (end -0.4 0) (stroke (width 0.15) (type solid)) (layer "B.SilkS") (uuid "a8693755-8b1b-4e75-99e7-5851be12a878"))
        (fp_line (start 2.7 -0.75) (end -2.7 -0.75) (stroke (width 0.15) (type solid)) (layer "B.SilkS") (uuid "0b867687-e10e-4bd6-8acd-b26390bc9717"))
        (fp_line (start 2.7 0.75) (end 2.7 -0.75) (stroke (width 0.15) (type solid)) (layer "B.SilkS") (uuid "2835045d-baae-46a1-b068-3514d49d31ba"))
    `
    const back_pads = `
        (pad "1" smd rect (at -1.775 0 ${p.rot}) (size 1.3 0.95) (layers "B.Cu" "B.Paste" "B.Mask") (uuid "3506caa0-ba74-4cfd-bcdd-11a2b77e124e") ${p.P1})
        (pad "1" smd rect (at -1.2 0 ${p.rot}) (size 0.6 0.4) (layers "B.Cu" "B.Paste" "B.Mask") (uuid "2b5aafce-274a-40c6-ae56-66eedc62aa41") ${p.P1})
        (pad "2" smd rect (at 1.2 0 ${p.rot}) (size 0.6 0.4) (layers "B.Cu" "B.Paste" "B.Mask") (uuid "0c294e8f-67da-4073-9a65-7e3876aa6634") ${p.P2})
        (pad "2" smd rect (at 1.775 0 ${p.rot}) (size 1.3 0.95) (layers "B.Cu" "B.Paste" "B.Mask") (uuid "a03215f3-66f4-4d89-8b4f-0648c1fc9077") ${p.P2})
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
    `
    const user_drawing = `
    `
    const user_comments = `
    `
    const user_eco1 = `
    `
    const user_eco2 = `
    `
    const model = `
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/D_1206_3216Metric.wrl" (offset (xyz 0 0 -1.6)) (scale (xyz 1 1 1)) (rotate (xyz 180 0 0)))
    `
    const standard_closing = `
            )

    `
    let final = standard_opening;
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

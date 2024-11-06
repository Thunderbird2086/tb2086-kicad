module.exports = {
  params: {
    designator: 'L',
    show_3d: false,
    from: {type: 'net', value: undefined},
    to: {type: 'net', value: undefined},
    VCC: {type: 'net', value: 'VCC'},
    GND: {type: 'net', value: 'GND'},
  },
  body: p => {
    const standard_opening = `(
         footprint "LED_SK6812MINI_PLCC4_3.5x3.5mm_to.75mm_rev_all"
        (version 20221018)
        (generator pcbnew)
        (layer "F.Cu")
        (descr "https://cdn-shop.adafruit.com/product-files/2686/SK6812MINI_REV.01-1-2.pdf")
        (tags "LED RGB NeoPixel Mini")
        (attr smd)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (fp_poly (pts (xy 2.6924 1.35) (xy 2.6924 1.95) (xy 2.0924 1.95)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.SilkS") (tstamp 1b0e2efe-caac-4e67-aa2f-e64089698047))
    `
    const front_pads = `
        (pad "1" smd rect (at -1.4 -0.65 ${p.rot}) (size 1.5 1.3) (layers "F.Cu" "F.Paste" "F.Mask") (tstamp 41df7e87-a496-47a9-ae17-1c4db422a87c) ${p.to})
        (pad "2" smd rect (at -0.95 0.9 ${p.rot}) (size 2.4 0.8) (layers "F.Cu" "F.Paste" "F.Mask") (tstamp 6e4da7a1-1c1c-4f6b-b1f0-be6d38152a49) ${p.GND})
        (pad "3" smd rect (at 1.5 0.85 ${p.rot}) (size 1.3 0.9) (layers "F.Cu" "F.Paste" "F.Mask") (tstamp e593ade9-89c9-46d8-846d-b43085a1e3db) ${p.from})
        (pad "4" smd rect (at 1.05 -0.7 ${p.rot}) (size 2.2 1.2) (layers "F.Cu" "F.Paste" "F.Mask") (tstamp f142eae6-95d5-420a-8091-c2e245c7408b) ${p.VCC})
    `
    const front_fabrication = `
        (fp_text reference "${p.ref}" (at 0 -2.75 ${p.rot}) (layer "F.Fab") hide (effects (font (size 1 1) (thickness 0.15))) (tstamp 5a11e3a0-df26-4e1e-8b8f-efb3ead5086b))
        (fp_text value "LED_SK6812MINI_PLCC4_3.5x3.5mm_to.75mm_rev_all" (at 0 3.25 ${p.rot}) (layer "F.Fab") (effects (font (size 1 1) (thickness 0.15))) (tstamp e06e35b3-e0aa-45c8-9c4c-d6ce7c824750))
        (fp_line (start -1.75 -1.75) (end -1.75 1.75) (stroke (width 0.1) (type solid)) (layer "F.Fab") (tstamp 4bf15588-8141-4eed-9b3c-61f1a0af2e71))
        (fp_line (start -1.75 1.75) (end 1.75 1.75) (stroke (width 0.1) (type solid)) (layer "F.Fab") (tstamp edf08d44-29ab-41d0-b891-6908b9c35b30))
        (fp_line (start 1.75 -1.75) (end -1.75 -1.75) (stroke (width 0.1) (type solid)) (layer "F.Fab") (tstamp d059dc71-e93e-4c09-98bd-8587f16853ad))
        (fp_line (start 1.75 0.75) (end 0.75 1.75) (stroke (width 0.1) (type solid)) (layer "F.Fab") (tstamp f77e6c0b-1ee4-4a22-9ff5-561d1f4206d5))
        (fp_line (start 1.75 1.75) (end 1.75 -1.75) (stroke (width 0.1) (type solid)) (layer "F.Fab") (tstamp 697d65c4-63d2-4b60-b801-a3800fcf954c))
        (fp_circle (center 0 0) (end 0 -1.5) (stroke (width 0.1) (type solid)) (fill none) (layer "F.Fab") (tstamp 974be58e-74de-4e07-947f-98852335e05c))
    `
    const front_mask = `
    `
    const front_courtyard = `
        (fp_line (start -2.8 -2) (end -2.8 2) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (tstamp 72992e62-bce9-4f6e-9406-5d626166f6e0))
        (fp_line (start -2.8 2) (end 2.8 2) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (tstamp 3407ab69-504c-4f7b-94c8-4b7d0f807fa5))
        (fp_line (start 2.8 -2) (end -2.8 -2) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (tstamp 618d036d-5236-45e6-9dcf-8d85a1b73eed))
        (fp_line (start 2.8 2) (end 2.8 -2) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (tstamp b6c113c4-050a-4055-bd0b-88b68607e013))
    `
    const front_paste = `
    `
    const pads = `
        (pad "1" thru_hole circle (at 0 -1.725 ${p.rot}) (size 0.4 0.4) (drill 0.3) (layers "*.Cu" "*.Mask") (tstamp 70b82f7c-eb6d-44af-b496-cbe2f3c6a9d2) ${p.to})
        (pad "2" thru_hole circle (at 0 0.9 ${p.rot}) (size 0.4 0.4) (drill 0.3) (layers "*.Cu" "*.Mask") (tstamp be91231e-0c80-46ed-bd2a-9df4f1f61934) ${p.GND})
        (pad "3" thru_hole circle (at 0 1.725 ${p.rot}) (size 0.4 0.4) (drill 0.3) (layers "*.Cu" "*.Mask") (tstamp e2006671-0793-45de-adf3-f0133e63afb6) ${p.from})
        (pad "4" thru_hole circle (at 0 -0.7 ${p.rot}) (size 0.4 0.4) (drill 0.3) (layers "*.Cu" "*.Mask") (tstamp 76cf5b2b-d13c-47a5-92e3-fb93189d460a) ${p.VCC})
    `
    const back_silkscreen = `
        (fp_poly (pts (xy -2.6924 1.35) (xy -2.6924 1.95) (xy -2.0924 1.95)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.SilkS") (tstamp bdd86020-d69d-4917-9b7f-d77f0462a200))
    `
    const back_pads = `
        (pad "1" smd rect (at 1.4 -0.65 ${p.rot}) (size 1.5 1.3) (layers "B.Cu" "B.Paste" "B.Mask") (tstamp a07bde1c-0d1c-4a9a-82f1-d49a2df0fd3c) ${p.to})
        (pad "2" smd rect (at 0.95 0.9 ${p.rot}) (size 2.4 0.8) (layers "B.Cu" "B.Paste" "B.Mask") (tstamp b500f531-c42f-47cc-b068-866b7ca18ddd) ${p.GND})
        (pad "3" smd rect (at -1.5 0.85 ${p.rot}) (size 1.3 0.9) (layers "B.Cu" "B.Paste" "B.Mask") (tstamp fdd49b2a-b4f9-431d-9c73-ef12b738cab3) ${p.from})
        (pad "4" smd rect (at -1.05 -0.7 ${p.rot}) (size 2.2 1.2) (layers "B.Cu" "B.Paste" "B.Mask") (tstamp 8e5e7816-0bb8-4b8d-bdbf-6f1b0ec1d5e9) ${p.VCC})
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
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/SK6812MINI.wrl" (offset (xyz 0 0 0)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))
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
